import React from 'react';
import './BackgroundAnimation.scss';

export const HomeBackgroundAnimation = () => {
	return (
		<div className='container'>
			<div className='bird-container bird-container--one'>
				<div className='bird bird--one'></div>
			</div>

			<div className='bird-container bird-container--three'>
				<div className='bird bird--three'></div>
			</div>
		</div>
	);
};
