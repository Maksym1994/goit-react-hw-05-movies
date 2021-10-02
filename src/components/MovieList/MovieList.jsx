import { NavLink, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const HomePageMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.div}>
      <ul className={s.ul}>
        {movies.map(({id, poster_path, title }) => (
          <li key={id} className={s.li}>
            <NavLink
              className={s.link}
              to={{
                pathname: `movies/${id}`,
                state: location ,
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                className={s.img}
              ></img>
              <p className={s.p}>{title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageMovies;
