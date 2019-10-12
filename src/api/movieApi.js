import { movieAxios as axios } from './axiosSetting';

export const getMovies = (movieFilter, moviePage) => {
  const filter = movieFilter || "popular";
  return axios.get(`/movie/${filter}`, {
    params: {
      page: moviePage
    }
  })
}

export const getMovie = (id) => {
  return axios.get(`/movie/${id}`)
}

export const getCast = (id) => {
  return axios.get(`/movie/${id}/credits`)
}

export const getMovieImages = (id) => {
  return axios.get(`/movie/${id}/images`)
}

export const getRecommendations = (id) => {
  return axios.get(`/movie/${id}/recommendations`)
}

export const searchMovies = (movieQuery, moviePage) => {
  return axios.get(`/search/movie`, {
    params: {
      query: movieQuery,
      page: moviePage
    }
  })
}

export const getTrailers = (id) => {
  return axios.get(`/movie/${id}/videos`)
}