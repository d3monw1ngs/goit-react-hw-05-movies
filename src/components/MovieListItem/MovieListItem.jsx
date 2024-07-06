import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'; 
  const { poster_path, title, release_date } = movie;

    return (
    <div className={css.movieItem}>
      {/* <button onClick={handleBackClick}>Go Back</button> */}
      <Link to={`/movies/${movie.id}`}>
        <img 
          src={posterBaseUrl + poster_path} 
          alt={title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/path/to/fallback-image.jpg';
          }}
        />
        <div className={css.movieDetails}>
          <h3 className={css.movieTitle}>{title}</h3>
          <p className={css.movieReleaseDate}>{release_date}</p>
        </div>      
      </Link>
    </div>
  );
};

export default MovieListItem;