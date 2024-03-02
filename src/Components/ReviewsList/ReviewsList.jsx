// import s from './ReviewsList.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'Service/MovieAPI';

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovies('reviews', '', movieId)
      .then(reviews => {
        setReviews(reviews.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
