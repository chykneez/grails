import {
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  SET_CURRENT_USER
} from './userConstants';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFail = error => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error
});
