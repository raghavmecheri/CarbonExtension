import React from 'react';
import styled from 'styled-components';

import NavbarListItems from './navbar-list-items';
import NavbarLogo from './navbar-logo';

const NavBarWrapper = styled.div`
	padding-top: 2em;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	a {
		color: #000;
		text-decoration: none;
	}
	@media (max-width: 700px) {
		height: 3.2em;
		border-bottom: 3px solid #38a66d;
		background-color: black;
	}
`;

const EmptySpace = styled.div``;

const Navbar = () => {
	return (
		<NavBarWrapper>
			{/* <NavbarLogo /> */}
			<NavbarListItems />
		</NavBarWrapper>
	);
};

export default Navbar;
