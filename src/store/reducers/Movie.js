const initState = {
  movie: {},
  isGetMovieLoading: false,
  getMovieError: null
}

export default function MovieReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_MOVIE_START':
      return {
        ...state,
        isGetMovieLoading: true,
        getMovieError: null,
      }
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        movie: action.data,
        isGetMovieLoading: false,
      }
    case 'GET_MOVIE_FAILURE':
      return {
        ...state,
        getMovieError: action.error,
        isGetMovieLoading: false,
      }
    default:
      return state;
  }
}