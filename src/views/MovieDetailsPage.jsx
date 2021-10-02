import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, Route, useRouteMatch} from 'react-router-dom';
import * as getMoviesApi from 'services/getMoviesApi'
import Spinner from 'components/Loader/Loader';

const GoBackButton = lazy(() =>
import('components/GoBackButton/GoBackButton'),
);
const Movie = lazy(() =>
  import('components/Movie/Movie'),
);
const Cast = lazy(() => import('views/Cast'));
const Reviews = lazy(() => import('views/Reviews'));

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { path } = useRouteMatch();

  useEffect(() => {
    getMoviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };
  return <>

  <GoBackButton onBack={handleGoBack} />

  {movie && <Movie movie={movie} />}

  <Suspense fallback={<Spinner/>}
      >
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
  
  </>;
}