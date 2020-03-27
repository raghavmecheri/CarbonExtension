import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	margin-top: 5em;
	backdrop-filter: blur(2px);
	width: fit-content;
	height: 10em;
	margin: auto;
	h1 {
		text-transform: uppercase;
	}
	p {
		font-size: big;
		font-weight: 600;
		width: 10em;
		margin: auto;
	}
`;

export const Home = () => {
	return (
		<HomeWrapper>
			<h1>How Green Are You?</h1>
			<p>-Button fo getting in-</p>
		</HomeWrapper>
	);
};
