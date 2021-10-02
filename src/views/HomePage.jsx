import { useState, useEffect } from "react";
import * as getMoviesApi from 'services/getMoviesApi'
import MovieList from 'components/MovieList/MovieList'
import s from 'components/MovieList/MovieList.module.css';

function HomePage () {
    const [trends, setTrends] = useState(null);
    
    useEffect(() => {
        getMoviesApi.fetchTrends().then(data => {
            setTrends(data.results);
        });
    
      }, []);
    
    return(
        <div>
            <h1 className={s.title}>Trending movies today</h1>
            {trends && (
            <MovieList movies={trends} />)} 
        </div>
    )
}

export default HomePage;