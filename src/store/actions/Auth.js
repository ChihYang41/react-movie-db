const setLoginData = (token, userId) => {
  return {
    type: "SET_LOGIN_DATA",
    token,
    userId
  }
}

const setLoginStatus = () => {
  return {
    type: "SET_LOGIN_DONE"
  }
}

const setSingOut = () => {
  return {
    type: "TOKEN_CLEAR"
  }
}


export const login = (token, userId) => {
  return (dispatch, getState) => {
    dispatch(setLoginData(token, userId))
  }
}

export const setLoginIsDone = () => {
  return (dispatch, getState) => {
    dispatch(setLoginStatus())
  }
}

export const tokenClear = () => {
  return (dispatch, getState) => {
    dispatch(setSingOut())
  }
}
