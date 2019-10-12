const initState = {
  searchResults: {},
  isSearchMoviesLoading: false,
  searchMoviesError: null
}

export default function SearchReducer(state = initState, action) {
  switch (action.type) {
    case 'SEARCH_MOVIES_START':
      return {
        ...state,
        isSearchMoviesLoading: true,
        searchMoviesError: null,
      }
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        searchResults: action.data,
        isSearchMoviesLoading: false,
      }
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        isSearchMoviesLoading: false,
        searchMoviesError: action.error
      }
    default:
      return state;
  }
}