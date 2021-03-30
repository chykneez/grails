import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/utils';

import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../user/userConstants';
import { clearCart, setCartFromFirebase } from './cartActions';
import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cartConstants';
import { selectCurrentUser } from '../user/userSelectors';
import { selectCartItems } from './cartSelectors';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.error(error);
    }
  }
}

function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
