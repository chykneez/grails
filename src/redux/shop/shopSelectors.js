import { createSelector } from 'reselect';

const collectionIdMap = {
  'air jordan': 1,
  nike: 2,
  adidas: 3,
  'off-white': 4,
  yeezy: 5
};

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollection = urlParam =>
  createSelector([selectShopCollections], collections =>
    collections.find(collection => collection.id === collectionIdMap[urlParam])
  );
