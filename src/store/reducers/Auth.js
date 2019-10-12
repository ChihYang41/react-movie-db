const initState = {
  loginStatus: null,
  loginError: null,
  token: null,
  userId: null
}

export default function AuthReducer(state = initState, action) {
  switch (action.type) {
    case 'SET_LOGIN_DATA':
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      }
    case 'SET_LOGIN_DONE':
      return {
        ...state,
        loginStatus: true
      }
    default:
      return state;
  }
}