const initState = {
  recommendations: {},
  isGetRecommendationsLoading: false,
  getRecommendationsError: null
}

export default function RecommendationsReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_RECOMMENDATIONS_START':
      return {
        ...state,
        isGetRecommendationsLoading: true,
        getRecommendationsError: null,
      }
    case 'GET_RECOMMENDATIONS_SUCCESS':
      return {
        ...state,
        recommendations: action.data,
        isGetRecommendationsLoading: false,
      }
    case 'GET_RECOMMENDATIONS_FAILURE':
      return {
        ...state,
        isGetRecommendationsLoading: false,
        getRecommendationsError: action.error
      }
    default:
      return state;
  }
}