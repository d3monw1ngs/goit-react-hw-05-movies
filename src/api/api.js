import axios from "axios";

const API_KEY = 'b56ef60a1b1a38147944a852936fff31';

axios.defaults.baseURL = 'htts://api.themoviedb.org/3/';
axios.defaults.params = {
    api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day`);
    return response.data.results;
};

export const fetchMovieByQuery = async movieName => {
    const response = await axios.get(`search/movie?query=${movieName}`);
    return response.data.results;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(`movie/${movieId}`);
    console.log('response from api', response);
    return response.data;
};

export const fetchMovieCast = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?`);
    return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?`);
    return response.data.results;
};