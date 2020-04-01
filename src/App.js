import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/shop">
					<ShopPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
