import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.scss';

class LoginForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.user === null && prevProps.user !== this.props.user) {
      message.success('login successfully!');
    }
  }

  handleSubmit = e => {
    const { signInWithEmailAndPassword } = this.props
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        signInWithEmailAndPassword(values.email, values.password).then(res => {
          if (!res) {
            message.error('login failed')
          }
        })
      }
    });
  };

  render() {
    const {
      user,
      signInWithGoogle,
      signInWithFacebook,
      signInWithGithub
    } = this.props;
    const { getFieldDecorator } = this.props.form;

    if (user) return <Redirect to="/popular/1" />

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h2 className="login-form-title">Log in</h2>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: '20px'}}>
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
          <div className="login-icon-container">
            <Icon type="google" onClick={signInWithGoogle}/>
            <Icon type="facebook" onClick={signInWithFacebook}/>
            <Icon type="github" onClick={signInWithGithub}/>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object,
  signInWithEmailAndPassword: PropTypes.func,
  signOut: PropTypes.func,
  signInWithGoogle: PropTypes.func,
  signInWithFacebook: PropTypes.func,
  signInWithGithub: PropTypes.func
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;
