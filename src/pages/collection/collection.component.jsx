import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
// import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className='collection-page'>
			Category page
		</div>
	)
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(CollectionPage));