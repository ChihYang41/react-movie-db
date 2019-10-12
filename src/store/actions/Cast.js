import { getCast } from '../../api/movieApi';

export const getCastStart = () => {
  return {
    type: "GET_CAST_START"
  }
}

export const getCastSuccess = (data) => {
  return {
    type: "GET_CAST_SUCCESS",
    data
  }
}

export const getCastFailure = (error) => {
  return {
    type: "GET_CAST_FAILURE",
    error
  }
}

export const asyncGetCast = (id) => {
  return (dispatch, getState) => {
    dispatch(getCastStart())
    getCast(id).then(res => {
      dispatch(getCastSuccess(res))
    }).catch(error => {
      dispatch(getCastFailure(error))
    })
  }
}