import React from 'react';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ movie }) => {
  const { posterUrl, title, releaseDate } = movie;

  return (
    <div className={css.movieItem}>
      <img src={posterUrl} alt={title} className={css.moviePoster} />
      <div className={css.movieDetails}>
        <h3 className={css.movieTitle}>{title}</h3>
        <p className={css.movieReleaseDate}>{releaseDate}</p>
      </div>
    </div>
  );
};
