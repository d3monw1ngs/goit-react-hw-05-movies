import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import { RotatingLines } from 'react-loader-spinner';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        seterror('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
    <div className={css.loading}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      </div>
    );
  }
  
  if (error) {
    return <div className={css.error}>{error}</div>;
  }

  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title } = movie;

  return (

    <div className={css.movieDetailsPage}>
      <img 
          src={posterBaseUrl + poster_path} 
          alt={title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/path/to/fallback-image.jpg';
          }}/>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <nav className={css.movieNav}>
        <NavLink to="cast" className={({ isActive }) => (isActive ? css.active : '')}>Cast</NavLink>
        <NavLink to="reviews"  className={({ isActive }) => (isActive ? css.active : '')}>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;