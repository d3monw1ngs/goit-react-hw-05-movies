import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { SharedLayout } from 'pages/Shared/SharedLayout';
import { HomePage } from 'pages/Home/HomePage';
import { MoviesPage } from 'pages/Movies/MoviesPage';
import { MovieDetailsPage } from 'pages/Movie/MovieDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';


export const App = () => {
  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};
