import { addWatchList, removeWatchList, getWatchList } from '../../api/firebaseApi';

const getWatchListStart = () => {
  return {
    type: "GET_WATCH_LIST_START"
  }
}

const getWatchListSuccess = (data) => {
  return {
    type: "GET_WATCH_LIST_SUCCESS",
    data
  }
}

const getWatchListFailure = (error) => {
  return {
    type: "GET_WATCH_LIST_FAILURE",
    error
  }
}

const addWatchListStart = () => {
  return {
    type: "ADD_WATCH_LIST_START"
  }
}

const addWatchListSuccess = () => {
  return {
    type: "ADD_WATCH_LIST_SUCCESS",
  }
}

const addWatchListFailure = (error) => {
  return {
    type: "ADD_WATCH_LIST_FAILURE",
    error
  }
}

const removeWatchListStart = () => {
  return {
    type: "REMOVE_WATCH_LIST_START"
  }
}

const removeWatchListSuccess = () => {
  return {
    type: "REMOVE_WATCH_LIST_SUCCESS",
  }
}

const removeWatchListFailure = (error) => {
  return {
    type: "REMOVE_WATCH_LIST_FAILURE",
    error
  }
}

export const asyncGetWatchList = (uid, token) => {
  return (dispatch, getState) => {
    dispatch(getWatchListStart())
    getWatchList(uid, token).then(res => {
      dispatch(getWatchListSuccess(res))
    }).catch(error => {
      dispatch(getWatchListFailure(error))
    })
  }
}

export const asyncAddWatchList = (data, uid, movieId, token) => {
  return (dispatch, getState) => {
    dispatch(addWatchListStart())
    addWatchList(data, uid, movieId, token).then(() => {
      dispatch(addWatchListSuccess())
    }).catch(error => {
      dispatch(addWatchListFailure(error))
    })
  }
}

export const asyncRemoveWatchList = (uid, movieId, token) => {
  return (dispatch, getState) => {
    dispatch(removeWatchListStart())
    removeWatchList(uid, movieId, token).then(() => {
      dispatch(removeWatchListSuccess())
    }).catch(error => {
      dispatch(removeWatchListFailure(error))
    })
  }
}


