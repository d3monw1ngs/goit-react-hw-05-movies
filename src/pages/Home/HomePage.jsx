import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'api/api';
import css from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        setError('Failed to fetch trending movies.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div className={css.loading}>Loading...</div>
  }

  if (error) {
    return <div className={css.error}>{error}</div>;
  }

  return (
    <div className={css.homePage}> 
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />      
    </div>
  );
};
