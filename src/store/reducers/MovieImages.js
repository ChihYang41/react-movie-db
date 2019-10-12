const initState = {
  movieImages: {},
  isGetMovieImagesLoading: false,
  getMovieImagesError: null
}

export default function MovieImagesReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_MOVIE_IMAGES_START':
      return {
        ...state,
        isGetMovieImagesLoading: true,
        getMovieImagesError: null,
      }
    case 'GET_MOVIE_IMAGES_SUCCESS':
      return {
        ...state,
        movieImages: action.data,
        isGetMovieImagesLoading: false,
      }
    case 'GET_MOVIE_IMAGES_FAILURE':
      return {
        ...state,
        isGetMovieImagesLoading: false,
        getMovieImagesError: action.error
      }
    default:
      return state;
  }
}