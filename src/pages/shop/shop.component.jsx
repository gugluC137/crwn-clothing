import React, { Component } from "react";
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.actions';

import ShopPageWithRouterHooks from './shopWithRouterHooks.component';



class ShopPage extends Component {
	state = {
		loading: true,
	}

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;

		const collectionsRef = firestore.collection('collections');

		collectionsRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});

		// collectionsRef.onSnapshot(snapshot => {
		// 	const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 	updateCollections(collectionsMap);
		// 	this.setState({ loading: false });
		// });
	}

	render() {
		return (
			<ShopPageWithRouterHooks isLoading={this.state.loading}/>
		);
	}
};

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage);


