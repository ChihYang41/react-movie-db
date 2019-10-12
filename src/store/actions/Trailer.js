import { getTrailers } from '../../api/movieApi';

export const getTrailersStart = () => {
  return {
    type: "GET_TRAILERS_START"
  }
}

export const getTrailersSuccess = (data) => {
  return {
    type: "GET_TRAILERS_SUCCESS",
    data
  }
}

export const getTrailersFailure = (error) => {
  return {
    type: "GET_TRAILERS_FAILURE",
    error
  }
}

export const asyncGetTrailers = (id) => {
  return (dispatch, getState) => {
    dispatch(getTrailersStart())
    getTrailers(id).then(res => {
      dispatch(getTrailersSuccess(res))
    }).catch(error => {
      dispatch(getTrailersFailure(error))
    })
  }
}