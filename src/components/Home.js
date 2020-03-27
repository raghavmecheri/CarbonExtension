import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	width: fit-content;
	margin: auto;
	margin-top: 15em;
	h1 {
		backdrop-filter: blur(2px);
		text-transform: uppercase;
		font-family: 'Lora', serif;
		font-weight: 700;
		font-size: 40px;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: auto;
	margin-top: 5em;
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	color: ${props => props.theme.colors.ligth};
	font-size: 20px;
	border: 2px solid white;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.dark};
		background: ${props => props.theme.colors.ligth};
		font-weight: 500;
	}
`;

export const Home = () => {
	return (
		<HomeWrapper>
			<h1>Are you being all the green that you can be?</h1>
			<ButtonBox>
				<Button>Carbon</Button>
				<Button>Hydrogin</Button>
				<Button>hectarin</Button>
			</ButtonBox>
		</HomeWrapper>
	);
};
