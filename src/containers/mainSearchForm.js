import { connect } from "react-redux";
import { SearchForm } from "../components/searchForm";
import { loadBooks } from "../functions/loadBooks";

const mapStateToProps = function (state) {
	return {
		value: state.searchString
	};
};

const mapDispatchToProps = function (dispatch) {
	return {
		onChangeString: (string_) => {
			dispatch({ type: "WRITE_SEARCHSTRING", payload: string_ });
		},
		onSubmit: (data_) => {
			data_['category'] = data_['category']['categoryType'];
			data_['sort'] = data_['sort']['sortType'];
			dispatch({ type: "CHANGE" });
			let book = loadBooks(data_);
			fetch(book).then(function (response) {
				if (!response.ok) {
					throw new Error("HTTP status " + response.status);
				}
				
				return response.json();
			}).then(function (data) {
				dispatch({ type: "SET_STATE", payload: data_ });
				dispatch({ type: "LOAD", payload: (data.items === undefined ? [] : data.items) });
				dispatch({ type: "NEW_LOADED", payload: (data.items === undefined ? 0 : data.items.length) });
				dispatch({ type: "FULL_LOADED", payload: data.totalItems });
				dispatch({ type: "CHANGE" });
			}).catch(function (e) {
				console.log("Booo", e);
				dispatch({ type: "CHANGE" });
			});
		}
	};
};

export const MainSearchForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchForm);
