import {
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_OUT_SUCCESS
} from './userConstants';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case SIGN_IN_FAIL:
    case SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
