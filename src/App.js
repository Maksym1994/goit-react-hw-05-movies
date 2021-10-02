import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/Loader/Loader';
import Container from 'components/Container';

const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const HomePage = lazy(() => import('./views/HomePage'));
const MoviePage = lazy(() => import('./views/MoviePage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <AppBar />
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviePage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
