import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBFUNGlUD6gWBlpS2cnl9OmLNakPtdQvb4",
  authDomain: "chihyang41-movie-db.firebaseapp.com",
  databaseURL: "https://chihyang41-movie-db.firebaseio.com",
  projectId: "chihyang41-movie-db",
  storageBucket: "chihyang41-movie-db.appspot.com",
  messagingSenderId: "529991632905",
  appId: "1:529991632905:web:35862974cdc9387d1d90d8",
  measurementId: "G-38002C1375"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();

export default firebaseConfig;