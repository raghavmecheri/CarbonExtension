import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import * as serviceWorker from './serviceWorker';

const Example = () => {
	return (
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
			<h3>Sample Site</h3>
			<br />
			<br />
			<h3>This is a random sample website</h3>
			<br />
			<br />
			<Calculator />
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Example />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
