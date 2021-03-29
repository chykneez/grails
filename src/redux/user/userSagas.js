import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserDocument } from '../../firebase/utils';

import { GOOGLE_SIGN_IN_START } from './userConstants';
import { googleSignInSuccess, googleSignInFail } from './userActions';

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserDocument, user);
    const snapshot = yield userRef.get();

    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(googleSignInFail(error));
  }
}

export default function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
