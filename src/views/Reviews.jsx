import { useState, useEffect } from 'react';
import * as getMoviesApi from 'services/getMoviesApi';
import s from './Reviews.module.css';

export default function MovieReviewsView({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {

    getMoviesApi.fetchReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <ul className={s.list}>
        {reviews && reviews.length > 0
          ? reviews.map(({id, author, content}) => (
              <li key={id} className={s.item}>
                <h3 className={s.title}>{author}</h3>
                <p className={s.content}>{content}</p>
              </li>
            ))
          : <p className={s.error}>We don't have any reviews for this movie</p>}
      </ul>
    </div>
  );
}
