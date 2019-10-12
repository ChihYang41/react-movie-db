import { getRecommendations } from '../../api/movieApi';

export const getRecommendationsStart = () => {
  return {
    type: "GET_RECOMMENDATIONS_START"
  }
}

export const getRecommendationsSuccess = (data) => {
  return {
    type: "GET_RECOMMENDATIONS_SUCCESS",
    data
  }
}

export const getRecommendationsFailure = (error) => {
  return {
    type: "GET_RECOMMENDATIONS_FAILURE",
    error
  }
}

export const asyncGetRecommendations = (id) => {
  return (dispatch, getState) => {
    dispatch(getRecommendationsStart())
    getRecommendations(id).then(res => {
      dispatch(getRecommendationsSuccess(res))
    }).catch(error => {
      dispatch(getRecommendationsFailure(error))
    })
  }
}