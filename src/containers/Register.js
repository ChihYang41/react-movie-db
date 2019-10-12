import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import { firebaseAppAuth } from '../firebase/FirebaseConfig';
import RegisterForm from '../components/Auth/Register';

const RegisterFormContainer = (props) => {
  return (
    <RegisterForm {...props} />
  )
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(RegisterFormContainer)