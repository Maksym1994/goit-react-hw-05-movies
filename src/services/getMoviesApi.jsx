import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '8b01b570d2ebdf9fc3f47ddefbdd70fc';

async function fetchWithErrorHandling(url = '', config ={}) {
    const response = await axios.get(url, config);
    return response.data;
}

export function fetchTrends(){
    return fetchWithErrorHandling(`trending/movie/day?api_key=${KEY}`);
}

export function fetchMoviesBySearch(searchQuery, page){
    return fetchWithErrorHandling(`search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}&language=en-US`);
}

export function fetchMovieById(movieId){
    return fetchWithErrorHandling(`movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchCast(movieId){
    return fetchWithErrorHandling(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
}

export function fetchReviews(movieId){
    return fetchWithErrorHandling(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
}