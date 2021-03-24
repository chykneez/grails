import React from 'react';

import InputForm from '../InputForm/InputForm';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
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
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
