import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART
} from './cartConstants';

import { addItemToCart } from './cartUtils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
