import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections	
);

export const selectShopCollectionForPreview = createSelector(
	[selectShopCollections],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = collectionUrlParam => 
	createSelector(
		[selectShopCollections],
		collections => collections ? collections[collectionUrlParam] : null
	);

export const selectCollectionsFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectHasCollectionsLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
)