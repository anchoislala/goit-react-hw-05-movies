import axios from "axios";

export const getTrendingMovies = () => {

return axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=cef7bf7f6a3a5aae5ba0604c161815a4') 

};

export const getSearchedMovies = (movieTitle) => {

    return axios.get('https://api.themoviedb.org/3/search/movie?', {
        params: {
            query: movieTitle,
            language: 'en',
            api_key: 'cef7bf7f6a3a5aae5ba0604c161815a4',
            include_adult: false,
        }
    });
};

export const getMovieById = (movieId) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=cef7bf7f6a3a5aae5ba0604c161815a4&language=en-US`)
};

export const getCastById = (movieId) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cef7bf7f6a3a5aae5ba0604c161815a4&language=en-US`)
};

export const getReviewsById = (movieId) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cef7bf7f6a3a5aae5ba0604c161815a4&language=en-US`)
};