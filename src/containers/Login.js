import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseAppAuth } from '../firebase/FirebaseConfig';
import LoginForm from '../components/Auth/Login';

const LoginFormContainer = (props) => {
  return (
    <LoginForm {...props} />
  )
}

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginFormContainer)