import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.scss';
import {
  Form,
  Input,
  Button,
  message
} from 'antd';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
    }
  }

  handleSubmit = e => {
    const { createUserWithEmailAndPassword, history } = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        createUserWithEmailAndPassword(values.email, values.confirm).then(res => {
          message.success('sign up succesfully!');
          history.push('/popular/1');
        })
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    }
    callback();
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <h2 className="register-form-title">Register</h2>
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
                min: 6,
                message: 'The input has to be more than 6 characters',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  history: PropTypes.object,
  createUserWithEmailAndPassword: PropTypes.func,
}

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default WrappedRegisterForm;
