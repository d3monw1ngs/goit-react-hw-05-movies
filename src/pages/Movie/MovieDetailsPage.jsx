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

  return (
    <div className="{css.movieDetailsPage">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <nav className={css.movieNav}>
        <NavLink to="cast" className={({ isActive }) => (isActive ? 'active' : '')}>Cast</NavLink>
        <NavLink to="reviews"  className={({ isActive }) => (isActive ? 'active' : '')}>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;