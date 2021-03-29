import {
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_SUCCESS,
  SET_CURRENT_USER
} from './userConstants';

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
