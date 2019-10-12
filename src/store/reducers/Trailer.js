const initState = {
  trailers: {},
  isGetTrailersLoading: false,
  getTrailersError: null
}

export default function TrailerReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_TRAILERS_START':
      return {
        ...state,
        isGetTrailersLoading: true,
        getTrailersError: null,
      }
    case 'GET_TRAILERS_SUCCESS':
      return {
        ...state,
        trailers: action.data,
        isGetTrailersLoading: false,
      }
    case 'GET_TRAILERS_FAILURE':
      return {
        ...state,
        getTrailersError: action.error,
        isGetTrailersLoading: false,
      }
    default:
      return state;
  }
}