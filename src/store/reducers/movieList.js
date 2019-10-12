const initState = {
  movies: [],
  isGetMoviesLoading: false,
  getMoviesError: null
}

export default function MovieListReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return {
        ...state,
        isGetMoviesLoading: true,
        getMoviesError: null,
      }
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.data,
        isGetMoviesLoading: false,
      }
    case 'GET_MOVIES_FAILURE':
      return {
        ...state,
        getMoviesError: action.error,
        isGetMoviesLoading: false,
      }
    default:
      return state;
  }
}