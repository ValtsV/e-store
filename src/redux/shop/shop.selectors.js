import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsWomens = createSelector(
  [selectShop],
  (shop) => shop.collections.womens
);

export const selectCollectionsMens = createSelector(
  [selectShop],
  (shop) => shop.collections.mens
);

export const selectCollectionWomens = (collectionUrlParam) =>
  createSelector([selectCollectionsWomens], (collections) => {
    if (!collections[collectionUrlParam]) {
      return { title: "Oopsie! Nothing's here!", items: false };
    }
    return collections[collectionUrlParam];
  });

export const selectCollectionMens = (collectionUrlParam) =>
  createSelector([selectCollectionsMens], (collections) => {
    if (!collections[collectionUrlParam]) {
      return { title: "Oopsie! Nothing's here!", items: false };
    }
    return collections[collectionUrlParam];
  });

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollectionsForPreviewWomens = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
