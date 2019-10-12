const initState = {
  cast: {},
  isGetCastLoading: false,
  getCastError: null
}

export default function CastReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_CAST_START':
      return {
        ...state,
        isGetCastLoading: true,
        getCastError: null,
      }
    case 'GET_CAST_SUCCESS':
      return {
        ...state,
        cast: action.data,
        isGetCastLoading: false,
      }
    case 'GET_CAST_FAILURE':
      return {
        ...state,
        isGetCastLoading: false,
        getCastError: action.error
      }
    default:
      return state;
  }
}