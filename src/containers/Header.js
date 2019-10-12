import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import { compose } from 'redux';
import { connect } from 'react-redux';
import 'firebase/auth';
import { firebaseAppAuth } from '../firebase/FirebaseConfig';
import Header from '../components/Header/Header';

const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    userId: auth.userId,
    token: auth.token
  }
}

export default compose(
  withFirebaseAuth({ firebaseAppAuth }),
  connect(mapStateToProps, null)
)(HeaderContainer)