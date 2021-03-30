import React from 'react';

import { SigningPageContainer } from './SigningPageStyles';

import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

const SigningPage = () => (
  <SigningPageContainer>
    <SignIn />
    <SignUp />
  </SigningPageContainer>
);

export default SigningPage;
