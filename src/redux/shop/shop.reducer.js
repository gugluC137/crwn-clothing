
import shopActionTypes from './shop.types';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case shopActionTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		
		case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.collectionsMap,
			};
		
		case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.errorMessage,
			}	

		default:
			return state;
	}
};

export default shopReducer;