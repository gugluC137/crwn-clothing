import styled, { css } from 'styled-components';

const basicButtonStyles = css`
	background-color: #000;
	color: #fff;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: #fff;
	color: #000;
	border: 1px solid #000;

	&:hover {
		background-color: #000;
		color: #fff;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: #fff;
	border: none;

	&:hover {
		background-color: #357ae8;
	}
`;

const getButtonStyles = props => {
	if(props.isGoogleSignIn) {
		return googleSignInStyles;
	}
	if(props.inverted) {
		return invertedButtonStyles;
	}
	return basicButtonStyles;
}



export const StyledCustomButton = styled.button`
	min-width: 100px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 37px;
	font-size: 15px;
	text-transform: uppercase;
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;