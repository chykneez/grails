import React from 'react';
import { connect } from 'react-redux';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignInStyles';

import InputForm from '../InputForm/InputForm';
import CustomButton from '../CustomButton/CustomButton';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>Already have an account?</SignInTitle>
        <span>Sign in with your email and password!</span>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            type='email'
            name='email'
            value={this.state.email}
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <InputForm
            type='password'
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
              onClick={googleSignInStart}
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
