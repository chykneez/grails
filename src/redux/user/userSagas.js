import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserDocument } from '../../firebase/utils';

import { signInSuccess, signInFail } from './userActions';
import { EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from './userConstants';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserDocument, userAuth);
    const snapshot = yield userRef.get();

    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export default function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
