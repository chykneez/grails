import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './SignUpStyles';

import InputForm from '../InputForm/InputForm';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../redux/user/userActions';

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Check to see if the user entered the same password twice.
    if (password !== confirmPassword) {
      alert(`Your passwords don't match!`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Don't have an account?</SignUpTitle>
      <span>Sign up with your email and password!</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <InputForm
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          onChange={handleChange}
          required
        />
        <InputForm
          type='email'
          name='email'
          value={email}
          label='Email'
          onChange={handleChange}
          required
        />
        <InputForm
          type='password'
          name='password'
          value={password}
          label='Password'
          onChange={handleChange}
          required
        />
        <InputForm
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          onChange={handleChange}
          required
        />

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: credentials => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
