import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let buildNumber = 0.23;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<iframe src="https://chromebot-canary-and-chromebot.weebly.com/"/>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
