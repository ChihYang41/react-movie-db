import { getMovies } from '../../api/movieApi';

export const getMoviesStart = () => {
  return {
    type: "GET_MOVIES_START",
  }
}

export const getMoviesSuccess = (data) => {
  return {
    type: "GET_MOVIES_SUCCESS",
    data
  }
}

export const getMoviesFailure = (error) => {
  return {
    type: "GET_MOVIES_FAILURE",
    error
  }
}

export const asyncGetMovies = (filter, page) => {
  return (dispatch, getState) => {
    dispatch(getMoviesStart());
    getMovies(filter, page).then(res => {
      dispatch(getMoviesSuccess(res))
    }).catch(error => {
      dispatch(getMoviesFailure(error))
    })
  }
}