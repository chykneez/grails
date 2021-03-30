import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from './shopConstants';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFail = errorMessage => ({
  type: FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});
