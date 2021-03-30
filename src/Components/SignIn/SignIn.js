import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignInStyles';

import InputForm from '../InputForm/InputForm';
import CustomButton from '../CustomButton/CustomButton';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>Already have an account?</SignInTitle>
      <span>Sign in with your email and password!</span>

      <form onSubmit={handleSubmit}>
        <InputForm
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={handleChange}
          required
        />
        <InputForm
          type='password'
          name='password'
          value={password}
          label='Password'
          handleChange={handleChange}
          required
        />

        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
