import './App.css';
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import { MainSearchForm } from "./containers/mainSearchForm"
import { BookshelfInst } from "./containers/bookshelfContainer"
import  Bookpage  from "./components/bookPage"
import { store } from "./store";
import { useSelector } from 'react-redux'

export const App = props => {
	const counter = useSelector((state) => state.isLoading)
	return (
		<div>
			<Container maxWidth="md">
				<Box  >
					<MainSearchForm />
					<Router>
						<Routes>
							<Route path="/" element={<BookshelfInst />} />
							<Route path="/books/:id" element={<Bookpage />} />
						</Routes>
					</Router>
					{counter && <LinearProgress />}
				</Box>
			</Container>
		</div>
	);
};


export default App;
