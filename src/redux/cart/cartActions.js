import {
  ADD_ITEM,
  TOGGLE_CART_DROPDOWN,
  CLEAR_ITEM_FROM_CART
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
