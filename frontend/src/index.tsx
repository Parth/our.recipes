import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import RecipeList from "./components/RecipeList";

injectTapEventPlugin();
ReactDOM.render(
	<MuiThemeProvider>
		<Router>
			<Route path="/" component={Welcome} />
			<Route path="/recipes" component={RecipeList}/>
		</Router>
	</MuiThemeProvider>,
	document.getElementById("app")
);
