import { firebaseAxios as axios } from './axiosSetting';

export const addWatchList = (data, uid, movieId, token) => {
  return axios.put(`/watchlist/${uid}/${movieId}.json?auth=${token}`, data)
}

export const removeWatchList = (uid, movieId, token) => {
  return axios.delete(`/watchlist/${uid}/${movieId}.json?auth=${token}`)
}

export const getWatchList = (uid, token) => {
  return axios.get(`/watchlist/${uid}.json?auth=${token}`)
}