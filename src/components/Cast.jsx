import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { RotatingLines } from 'react-loader-spinner';
import css from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCast = async () => {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
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
    <div className={css.castList}>
        {cast.map(member => (
            <div
                key={member.cast_id}
                className={css.castMember}>
                    <img src={`${member.profile_path}`} 
                         alt={member.name} />
                    <p>{member.name} as {member.character}</p>
            </div>
        ))}    
    </div>
  );
};

export default Cast;