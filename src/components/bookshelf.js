import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BookCard } from '../components/bookCard'
import Button from '@mui/material/Button';
function ListItem(props) {
	return <BookCard value={props.value}></BookCard>;
}


function NumberList(props) {
	const books = props;
	const listItems = books.map((book) =>
		<ListItem key={book.key} value={book} />
	);
	return (
		<div>{listItems}</div>
	);
}

export const Bookshelf = props => {
	return (
		<div>
			{props.value.length > 0 && NumberList(props.value)}
			{(props.loadedBooks[1] - props.loadedBooks[0] !== 0 && !props.isLoading) && <Button variant="outlined" onClick={(e) => props.onLoad(
				{
					site: props.searchState.site,
					search: props.searchState.search,
					maxResults: props.searchState.maxResults,
					startIndex: props.loadedBooks[0],
					category: props.searchState.category,
					sort: props.searchState.sort
				}
			)} fullWidth>Load More</Button>}
		</div>
	);
}

export default Bookshelf;