import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
 
  const { posterUrl, title, releaseDate } = movie;

  return (
    <div className={css.movieItem}>
      <Link to={`/movies/${movie.id}`}>
        <img 
          src={posterUrl} 
          alt={title} 
          className={css.moviePoster} 
        />
        <div className={css.movieDetails}>
          <h3 className={css.movieTitle}>{title}</h3>
          <p className={css.movieReleaseDate}>{releaseDate}</p>
        </div>      
      </Link>
    </div>
  );
};

export default MovieListItem;