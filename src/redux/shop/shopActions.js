import {
  FETCH_COLLECTIONS_FAIL,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from './shopConstants';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/utils';

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

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFail(error.message)));
  };
};
