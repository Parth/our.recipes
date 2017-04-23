import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import RecipeList from "./components/RecipeList";
import CreateRecipe from "./components/CreateRecipe";

injectTapEventPlugin();
ReactDOM.render(
	<MuiThemeProvider>
		<div>
			<AppBar
				title="Recipe Share"
				iconElementRight={<CreateRecipe />} />
			<RecipeList url="hi" />
		</div>
	</MuiThemeProvider>,
	document.getElementById("app")
);
