import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarLinkStyle = styled.div`
	position: relative;
	transition: 0.5s;
	font-weight: 500;
	padding: 5px;
	border-bottom: 1px solid black;

	&:before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 3px;
		background: #38a66d;
		z-index: 1;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.6s;
	}

	&:hover {
		cursor: pointer;
		color: #38a66d;
	}

	&:hover:before {
		transform: scaleX(1);
		transform-origin: left;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

const navbarItems = {
	home: { url: '/', content: 'Home' },
	information: { url: '/information', content: 'Information' },
	contribute: { url: '/contribute', content: 'Contribute' },
	about: { url: '/about', content: 'About' },
};

const NavbarItem = (props) => {
	return (
		<Link to={props.url}>
			<NavbarLinkStyle>{props.content}</NavbarLinkStyle>
		</Link>
	);
};

const NavbarListItems = () =>
	Object.keys(navbarItems).map((item) => {
		const { url, content } = navbarItems[item];
		return <NavbarItem key={item} url={url} content={content} />;
	});

export default NavbarListItems;
