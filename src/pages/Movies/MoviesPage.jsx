import React, { useState } from 'react';
import  MovieList  from 'components/MovieList/MovieList';
import { fetchMovieByQuery } from 'api/api';
import { RotatingLines } from 'react-loader-spinner';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const handleSearch = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const response = await fetchMovieByQuery(query);
    setMovies(response);
  } catch (error) {
    setError('Failed to fetch movies.');
  } finally {
    setLoading(false);
  }
 };

  return (
    <div className={css.moviesPage}>
      <form onSubmit={handleSearch} className={css.searchBar}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={css.searchInput}
          placeholder="Search for a movie..."
        />
        <button type="submit" className={css.searchBtn}>Search</button>
      </form>
      {loading && (
        <div className={css.loading}>
          <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading" />
        </div>
      )}
      {error && <div className="error">{error}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;