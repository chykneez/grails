import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  auth,
  googleProvider,
  createUserDocument,
  getCurrentUser
} from '../../firebase/utils';

import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  signUpFail,
  signUpSuccess
} from './userActions';

import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS
} from './userConstants';

function* getSnapshotFromUserAuth(userAuth, data) {
  try {
    const userRef = yield call(createUserDocument, userAuth, data);
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

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, data: { displayName } }));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* signInAfterSignUp({ payload: { user, data } }) {
  yield getSnapshotFromUserAuth(user, data);
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

function* onSignUpSucess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSucess)
  ]);
}
