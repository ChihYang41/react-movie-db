import { getMovie } from '../../api/movieApi';

export const getMovieStart = () => {
  return {
    type: "GET_MOVIE_START"
  }
}

export const getMovieSuccess = (data) => {
  return {
    type: "GET_MOVIE_SUCCESS",
    data
  }
}

export const getMovieFailure = (error) => {
  return {
    type: "GET_MOVIE_FAILURE",
    error
  }
}

export const asyncGetMovie = (id) => {
  return (dispatch, getState) => {
    dispatch(getMovieStart())
    getMovie(id).then(res => {
      dispatch(getMovieSuccess(res))
    }).catch(error => {
      dispatch(getMovieFailure(error))
    })
  }
}