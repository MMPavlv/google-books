import { bookParser } from "../functions/bookParser";

export function searchReducer(state = "", action) {
	switch (action.type) {
		case "WRITE_SEARCHSTRING": {
			return action.payload;
		}
		case "EVALUATE_SEARCH": {
			console.log(action.payload);
			return state;
		}
	}
	return state;
}

export function searchStateReducer(state = "", action) {
	switch (action.type) {
		case "SET_STATE": {
			return action.payload;
		}
	}
	return state;
}

export function loadingReducer(state = false, action) {
	switch (action.type) {
		case "CHANGE": {
			return !state;
		}
	}
	return state;
}

export function bookReducer(state = [], action) {
	switch (action.type) {
		case "LOAD": {
			return bookParser(action.payload);
		}
		case "UPDATE": {
			state.push(...bookParser(action.payload))
			return state;
		}
		case "CLEAR": {
			return [];
		}
	}
	return state;
}

export function loadingBooksReducer(state = 0, action) {
	switch (action.type) {
		case "NEW_LOADED": {
			return action.payload;
		}
		case "UPDATE_LOADED": {
			return state + action.payload;
		}
	}
	return state;
}

export function fullBooksReducer(state = 0, action) {
	switch (action.type) {
		case "FULL_LOADED": {
			return action.payload;
		}
	}
	return state;
}