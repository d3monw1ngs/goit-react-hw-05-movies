import React from 'react';
import  MovieListItem  from 'components/MovieListItem/MovieListItem';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieList}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
