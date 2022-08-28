import React from 'react';

const MovieList = (props) => {
	return (
		<div id="movelist">
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</div>
	);
};

export default MovieList;