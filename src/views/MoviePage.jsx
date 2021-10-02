import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 

import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Spinner from 'components/Loader/Loader';

import * as getmoviesApi from 'services/getMoviesApi';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVE: 'resolved',
    REJECT: 'rejected',
  };

const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (!searchQuery) return;
    setStatus(STATUS.PENDING);
    getmoviesApi.fetchMoviesBySearch(searchQuery, page).then(data => {
        if (data.results.length === 0) {
            toast.error(`Nothing found ${query}🙄`, {
              autoClose: 2000,
            
            });
          }
      if (data.results) {
        setStatus(STATUS.RESOLVE);
        return setMovies(prevMovies => [...prevMovies, ...data.results]);
      }
    });
  }, [searchQuery, page, query]);
    
     
  const handleFormSubmit = query => {
    setMovies([]);
    setQuery(query);
    setPage(1);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  const handleLoadMore = () => {
    setPage(p => p + 1);
  };

  return (
    <main>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === STATUS.PENDING && <Spinner />}
      <MovieList movies={movies} />

      {movies.length > 0 && <LoadMoreButton onClick={handleLoadMore} />}

      <Toaster position="top-right"/>
    </main>
  );
};

export default MoviesPage;