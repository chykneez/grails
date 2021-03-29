import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  CHECK_USER_SESSION
} from './userConstants';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: SIGN_IN_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});
