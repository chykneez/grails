import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from './shopConstants';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
