
import {
  NavLink,
  useRouteMatch,
  useParams,
  useLocation,
} from 'react-router-dom';
import s from './Movie.module.css';

export default function MoviePageDetails({ movie }) {
  const location = useLocation();
  const { slug } = useParams();
  const { url} = useRouteMatch();

  console.log(slug);

  const {id, poster_path, title, release_date, overview, genres} = movie;

  return (
    <>
      <div key={id} className={s.article}>
        <div className={s.WrapperMovie}>
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          ></img>

          <div className={s.info}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.p}> {release_date}</p>
            {genres.map(({id, name}) => (
              <ul className={s.label}>
                <li key={id}>{name}</li>
              </ul>
            ))}

            <p className={s.p}>{overview}</p>

            <div className={s.links}>
              <NavLink
                className={s.link}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                className={s.link}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location.state.from },
                }}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
