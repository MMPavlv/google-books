import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const SearchForm = props => {
	const [sortType, setSort] = React.useState('relevance');
	const [categoryType, setCategory] = React.useState('all');

	const startSearch = () => {
		props.onSubmit({
			site: 'https://www.googleapis.com/books/v1/volumes?q=',
			search: props.value.trim().split(' ').join('+'),
			maxResults: 30,
			startIndex: 0,
			category: { categoryType },
			sort: { sortType }
		});
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			startSearch();
		}
	}
	const handleSortChange = (event) => {
		setSort(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<div style={{ paddingBottom: '8px', paddingTop: '8px' }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={10}>
						<TextField
							placeholder="Search Google Books"
							onKeyDown={handleKeyDown}
							value={props.value} onChange={(e) => props.onChangeString(e.target.value)}
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={2}>
						<Button variant="contained" onClick={(e) => startSearch()} fullWidth size="large" style={{ height: "100%" }}>Search</Button>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-sort">Sort by</InputLabel>
							<Select
								labelId="demo-simple-select-sort"
								id="demo-simple-sort"
								value={sortType}
								label="sort By"
								onChange={handleSortChange}
							>
								<MenuItem value={'relevance'}>relevance</MenuItem>
								<MenuItem value={'newest'}>newest</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-category">Select category</InputLabel>
							<Select
								labelId="demo-simple-select-category"
								id="demo-simple-category"
								value={categoryType}
								label="sort By"
								onChange={handleCategoryChange}
							>
								<MenuItem value={'all'}>all</MenuItem>
								<MenuItem value={'art'}>art</MenuItem>
								<MenuItem value={'biography'}>biography</MenuItem>
								<MenuItem value={'computers'}>computers</MenuItem>
								<MenuItem value={'history'}>history</MenuItem>
								<MenuItem value={'medical'}>medical</MenuItem>
								<MenuItem value={'poetry'}>poetry</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Box>

		</div>
	);
}

export default SearchForm;