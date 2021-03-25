import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from './cartConstants';

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
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
