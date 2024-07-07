import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
    const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'; 
  const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Image';
  const { poster_path, title, release_date } = movie;

  const formatDate = (dateString) => {
    const options =  { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


    return (
    <div className={css.movieItem}>     
      <Link to={`/movies/${movie.id}`}>
        <img 
          src={posterBaseUrl + poster_path} 
          alt={title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />
        <div className={css.movieDetails}>
          <h3 className={css.movieTitle}>{title}</h3>
          <p className={css.movieReleaseDate}>{formatDate(release_date)}</p>
        </div>      
      </Link>
    </div>
  );
};

export default MovieListItem;