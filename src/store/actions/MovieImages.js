import { getMovieImages } from '../../api/movieApi';

export const getMovieImagesStart = () => {
  return {
    type: "GET_MOVIE_IMAGES_START"
  }
}

export const getMovieImagesSuccess = (data) => {
  return {
    type: "GET_MOVIE_IMAGES_SUCCESS",
    data
  }
}

export const getMovieImagesFailure = (error) => {
  return {
    type: "GET_MOVIE_IMAGES_FAILURE",
    error
  }
}

export const asyncGetMovieImages = (id) => {
  return (dispatch, getState) => {
    dispatch(getMovieImagesStart())
    getMovieImages(id).then(res => {
      dispatch(getMovieImagesSuccess(res))
    }).catch(error => {
      dispatch(getMovieImagesFailure(error))
    })
  }
}