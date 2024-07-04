import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'api/api';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect (() => {
    // fetch trending movies
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};
