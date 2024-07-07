import React, { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import SharedLayout from 'pages/Shared/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviesPage = lazy(() => import('../pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/Movie/MovieDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (   
       <Suspense fallback={
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
      }>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense> 
  );
};

export default App;
