import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.24;

console.log("Welcome to the chromebot website. This is client build B." + buildNumber + ".");


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/status" render={() => {
						return (
							<iframe src="https://chromebot-status-page-beta-114.freshstatus.io/"/>
						);
					}}>
					<Route render={() => {
						return (
							<iframe src="https://chromebot-canary-and-chromebot.weebly.com/"/>
						);
					}}>
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
