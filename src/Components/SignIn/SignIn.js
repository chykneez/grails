import React from 'react';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignInStyles';

import InputForm from '../InputForm/InputForm';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    const { email, password } = this.state;
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>Already have an account?</SignInTitle>
        <span>Sign in with your email and password!</span>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            name='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <InputForm
            name='password'
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}
            required
          />

          <ButtonsContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
