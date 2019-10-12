const initState = {
  watchlist: {},
  isGetWatchListLoading: false,
  isAddWatchListLoading: false,
  isRemoveWatchListLoading: false,
  getWatchListError: null,
  addWatchListError: null,
  removeWatchListError: null
}

export default function WatchListReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_WATCH_LIST_START':
      return {
        ...state,
        isGetWatchListLoading: true,
        getWatchListError: null,
      }
    case 'GET_WATCH_LIST_SUCCESS':
      return {
        ...state,
        watchlist: action.data,
        isGetWatchListLoading: false,
      }
    case 'GET_WATCH_LIST_FAILURE':
      return {
        ...state,
        getWatchListError: action.error,
        isGetWatchListLoading: false,
      }
    case 'ADD_WATCH_LIST_START':
      return {
        ...state,
        isAddWatchListLoading: true,
        addWatchListError: null,
      }
    case 'ADD_WATCH_LIST_SUCCESS':
      return {
        ...state,
        isAddWatchListLoading: false,
      }
    case 'ADD_WATCH_LIST_FAILURE':
      return {
        ...state,
        addWatchListError: action.error,
        isAddWatchListLoading: false,
      }
    case 'REMOVE_WATCH_LIST_START':
      return {
        ...state,
        isRemoveWatchListLoading: true,
        removeWatchListError: null,
      }
    case 'REMOVE_WATCH_LIST_SUCCESS':
      return {
        ...state,
        isRemoveWatchListLoading: false,
      }
    case 'REMOVE_WATCH_LIST_FAILURE':
      return {
        ...state,
        removeWatchListError: action.error,
        isRemoveWatchListLoading: false,
      }
    default:
      return state;
  }
}