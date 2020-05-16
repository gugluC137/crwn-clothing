import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPageWithRouterHooks = () => {
	const match = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route exact path={`${match.path}`}>
					<CollectionsOverviewContainer />
				</Route>
				<Route path={`${match.path}/:collectionId`}>
					<CollectionPageContainer />
				</Route>
			</Switch>
		</div>
	);
};

export default ShopPageWithRouterHooks;
