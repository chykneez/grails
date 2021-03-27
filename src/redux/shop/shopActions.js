import { UPDATE_COLLECTIONS } from './shopConstants';

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
