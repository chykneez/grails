import { ADD_ITEM, TOGGLE_CART_DROPDOWN } from './cartConstants';

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
