import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { RotatingLines } from 'react-loader-spinner';
import CastList from 'components/CastList/CastList';
import css from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCast = async () => {
            try {
                const castData = await fetchMovieCast(movieId);
                setCast(castData);
            } catch (error) {
                setError('Failed to fetch cast.');
            } finally {
                setLoading(false);
            }
        };
        getCast();
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
    <div className={css.castPage}>
        <h2>Cast</h2>
        <CastList cast={cast} />
    </div>
  );
};

export default Cast;