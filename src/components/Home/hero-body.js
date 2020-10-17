import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ButtonComponent from './button-component';

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	padding-top: 2em;
	${({ theme }) =>
		theme.query.desktop({
			display: 'grid',
			'align-items': 'center',
			'justify-content': 'center',
			'padding-top': '0',
		})}
`;

const HeroBody = () => {
	return (
		<>
			<ButtonBox>
				<Link style={{marginRight: "0.5vw"}}  to='/quiz/person'>
					<ButtonComponent content={'Individual'} />
				</Link>
				<Link style={{marginLeft: "0.5vw"}} to='/quiz/organization'>
					<ButtonComponent content={'Organization'} />
				</Link>
			</ButtonBox>
		</>
	);
};

export default HeroBody;
