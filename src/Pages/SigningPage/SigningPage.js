import React from 'react';

import './SigningPage.scss';

import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

const SigningPage = () => (
  <div className='signing-page'>
    <SignIn />
    <SignUp />
  </div>
);

export default SigningPage;
