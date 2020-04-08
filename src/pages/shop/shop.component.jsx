import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
	const match = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route exact path={`${match.path}`}>
					<CollectionsOverview />
				</Route>
				<Route path={`${match.path}/:collectionId`}>
					<CollectionPage />
				</Route>
			</Switch>
		</div>
	);
};

export default ShopPage;
