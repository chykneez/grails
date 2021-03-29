import React from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './SignUpStyles';

import InputForm from '../InputForm/InputForm';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../redux/user/userActions';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    // Check to see if the user entered the same password twice.
    if (password !== confirmPassword) {
      alert(`Your passwords don't match!`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>Don't have an account?</SignUpTitle>
        <span>Sign up with your email and password!</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <InputForm
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
            required
          />
          <InputForm
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required
          />
          <InputForm
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required
          />
          <InputForm
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: credentials => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
