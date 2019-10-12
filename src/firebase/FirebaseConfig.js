import * as firebase from 'firebase/app';

const firebaseConfig = {
  // firebase config
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();

export default firebaseConfig;