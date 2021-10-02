import { useState, useEffect } from 'react';
import * as getMoviesApi from 'services/getMoviesApi';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    getMoviesApi.fetchCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul className={s.list}>
        {casts && casts.length > 0
         ? casts.map(({id, name, profile_path, character}) => (
            <li className={s.item} key={id}>
              <img
                className={s.img}
                alt={name}
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                />
                <p className={s.name}>{name}</p>
            <p className={s.name}>
              <span className={s.name}>Character: </span>
                <b className={s.character}>{character}</b>
            </p>
              </li>
            ))
            : <p className={s.error}>There is no information about actors for this movie.</p>}
        </ul>
      </div>
  );
}