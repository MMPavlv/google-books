import { connect } from "react-redux";
import { Bookshelf } from "../components/bookshelf";
import { loadBooks } from "../functions/loadBooks";

const mapStateToProps = function (state) {
	return {
		value: state.books,
		searchState: state.searchState,
		loadedBooks: [state.loadedBooks, state.totalBooks],
		isLoading: state.isLoading
	};
};

const mapDispatchToProps = function (dispatch) {
	return {
		onLoad: (data_) => {
			dispatch({ type: "CHANGE" });
			let book = loadBooks(data_);
			fetch(book).then(function (response) {
				if (!response.ok) {
					throw new Error("HTTP status " + response.status);
				}
				return response.json();
			}).then(function (data) {
				dispatch({ type: "SET_STATE", payload: data_ });
				dispatch({ type: "UPDATE", payload: (data.items === undefined ? [] : data.items) });
				dispatch({ type: "UPDATE_LOADED", payload: (data.items === undefined ? 0 : data.items.length) });
				dispatch({ type: "FULL_LOADED", payload: data.totalItems });
				dispatch({ type: "CHANGE" });
			}).catch(function () {
				console.log("Booo");
				dispatch({ type: "CHANGE" });
			});
		}
	};
};

export const BookshelfInst = connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookshelf);
