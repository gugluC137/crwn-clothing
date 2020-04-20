import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.util";

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectDropdownHidden } from '../../redux/cart/cart.selectors';

// import "./header.styles.scss";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/shop">
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionDiv>
			) : (
				<OptionLink to="/signin">
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{!hidden && 
			<CartDropdown />
		}
	</HeaderContainer>
);

// const mapStateToProps = state => ({
// 	currentUser: selectCurrentUser(state),
// 	hidden: selectDropdownHidden(state),
// });   // this is same as the code below//

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectDropdownHidden,
})

export default connect(mapStateToProps)(Header);
