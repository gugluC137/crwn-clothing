import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';

import shopActionTypes from './shop.types';


export const fetchCollectionsStart = () => ({
	type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
	type: shopActionTypes.FETCH_COLLECTIONS_START,
	errorMessage,
});

export const fetchCollectionsAsync = () => {
	return dispatch => {
		const collectionsRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionsRef.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error)));
	};
};