import { searchMovies } from '../../api/movieApi';

export const searchMoviesStart = () => {
  return {
    type: "SEARCH_MOVIES_START"
  }
}

export const searchMoviesSuccess = (data) => {
  return {
    type: "SEARCH_MOVIES_SUCCESS",
    data
  }
}

export const searchMoviesFailure = (error) => {
  return {
    type: "SEARCH_MOVIES_FAILURE",
    error
  }
}

export const asyncSearchMovies = (query, page) => {
  return (dispatch, getState) => {
    dispatch(searchMoviesStart())
    searchMovies(query, page).then(res => {
      dispatch(searchMoviesSuccess(res))
    }).catch(error => {
      dispatch(searchMoviesFailure(error))
    })
  }
}