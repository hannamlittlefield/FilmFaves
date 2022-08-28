import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';

const App = () => {
  //Change the apiKey variable to your personal API key
  let apiKey = '123114ca'
	const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);


	return (
		<div className='container-fluid movie-grid'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Films' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
  </div>
			<div className='row'>
        <MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;