import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPageWithRouterHooks = ({ isLoading }) => {
	const match = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route exact path={`${match.path}`}>
					<CollectionsOverviewWithSpinner isLoading={isLoading} />
				</Route>
				<Route path={`${match.path}/:collectionId`}>
					<CollectionPageWithSpinner isLoading={isLoading} />
				</Route>
			</Switch>
		</div>
	);
};

export default ShopPageWithRouterHooks;