import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import { RotatingLines } from 'react-loader-spinner';
import css from './Reviews.module.css';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] =useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const getReviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError('Failed to fetch reviews.');
            } finally {
                setLoading(false);
            }
        };
        getReviews();
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
    <div className={css.reviewsContainer}>
        {reviews.length === 0 ? (
            <p className={css.noReviewsMessage}>No reviews available.</p>
        ) : (
            reviews.map(review => (
                <div key={review.id} className={css.reviewItem}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </div>
        ))
    )}
    </div>
  );
};

export default Reviews;