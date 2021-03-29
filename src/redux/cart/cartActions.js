import {
  ADD_ITEM,
  TOGGLE_CART_DROPDOWN,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART
} from './cartConstants';

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART
});
