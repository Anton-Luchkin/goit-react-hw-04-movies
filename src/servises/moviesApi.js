import Axios from 'axios';

const apiKey = 'ef48f1b6dbfe0c59ea486f054eb37e66';

const fetchTrendMovies = () => {
  return Axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
  ).then(response => response.data.results);
};

const fetchMovie = ({ movieId }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  ).then(response => response.data);
};

const fetchCast = ({ movieId }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  ).then(response => response.data.cast);
};

const fetchReviews = ({ movieId }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  ).then(response => response.data.results);
};

const fetchMovies = ({ searchQuery }) => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  ).then(response => response.data.results);
};

export default {
  fetchTrendMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
  fetchMovies,
};
