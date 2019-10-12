import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { firebaseApp } from '../firebase/FirebaseConfig';
import { login, setLoginIsDone } from '../store/actions/Auth';

class AuthListener extends Component {
  state = {
    isLoginDone: false
  }

  componentDidMount() {
    const { setLogin, setLoginIsDone } = this.props;

    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then(res => {
          setLogin(res, user.uid)
          setLoginIsDone()
        })
      } else {
        setLoginIsDone()
      }
    })
  }

  render() {
    return (
      <Fragment>
        {
          this.props.loginStatus &&
          this.props.children
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    userId: auth.userId,
    token: auth.token,
    loginStatus: auth.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (token, userId) => dispatch(login(token, userId)),
    setLoginIsDone: () => dispatch(setLoginIsDone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthListener)