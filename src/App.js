import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					this.setState(
						{
							currentUser: {
								id: snapshot.id,
								...snapshot.data(),
							},
						},
						() => console.log(this.state)
					);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path="/signin">
						<SignInAndSignUpPage />
					</Route>
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
}

export default App;