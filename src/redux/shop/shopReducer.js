import { UPDATE_COLLECTIONS } from './shopConstants';

import shopData from './shopData';

const initialState = {
  collections: shopData
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
