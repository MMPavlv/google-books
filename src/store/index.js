import { createStore, combineReducers } from "redux";
import { searchReducer, searchStateReducer, loadingReducer, bookReducer, loadingBooksReducer, fullBooksReducer } from "./reducers";

const initialState = {
	searchString: "",
	searchState: {
		site: '',
		search: [],
		maxResults: 30,
		startIndex: 0,
		category: "",
		sort: ""
	},
	isLoading: false,
	books: [],
	totalBooks: 0,
	loadedBooks: 0,
};

const reducer = combineReducers({
	searchString: searchReducer,
	searchState: searchStateReducer,
	isLoading: loadingReducer,
	books: bookReducer,
	loadedBooks: loadingBooksReducer,
	totalBooks: fullBooksReducer
});

export const store = createStore(reducer, initialState);
