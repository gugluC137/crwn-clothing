import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';

import ShopPageWithRouterHooks from './shopWithRouterHooks.component';

class ShopPage extends Component {
	// unsubscribeFromSnapshot = null;

	componentDidMount() {
		// collectionsRef.onSnapshot(snapshot => {
		// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		return <ShopPageWithRouterHooks />;
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
