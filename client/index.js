import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/status"
            render={() => {
              changeFavicon('/images/canaryLogo.png');
              return (
                <iframe src="https://chromebot-canary-and-chromebot.weebly.com/" />
              );
            }}
          />
          <Route
            render={() => {
              changeFavicon('/images/chromebotLogo.png');
              return (
                <iframe src="https://vincentdistoer.github.io/test" />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
