import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'

import RecipeList from "./components/RecipeList";
import Welcome from "./components/Welcome";

injectTapEventPlugin();
ReactDOM.render(
	<MuiThemeProvider>
		<Router>
			<Switch>
				<Route path="/recipes" component={RecipeList}/>
				<Route path="/" component={Welcome} />
			</Switch>
		</Router>
	</MuiThemeProvider>,
	document.getElementById("app")
);
