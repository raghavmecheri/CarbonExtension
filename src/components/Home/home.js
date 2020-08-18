import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import HomePage from './home-page';

const Home = () => {
	const [start, setStart] = useState(false);

	const handleIntro = () => {
		setStart(true);
	};

	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition
				key={start}
				addEndListener={(node, done) => {
					node.addEventListener('transitionend', done, false);
				}}
				classNames='fade'>
				<HomePage start={start} handleIntro={handleIntro} />
			</CSSTransition>
		</SwitchTransition>
	);
};

export default Home;
