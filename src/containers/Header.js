import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import { compose } from 'redux';
import { connect } from 'react-redux';
import 'firebase/auth';
import { firebaseAppAuth } from '../firebase/FirebaseConfig';
import Header from '../components/Header/Header';
import { tokenClear } from '../store/actions/Auth';

const HeaderContainer = (props) => {
  return (
    <Header {...props} />
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    userId: auth.userId,
    token: auth.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tokenClear: () => dispatch(tokenClear())
  }
}

export default compose(
  withFirebaseAuth({ firebaseAppAuth }),
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer)