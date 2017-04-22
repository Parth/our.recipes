import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RecipeList from "./components/RecipeList";

ReactDOM.render(
	<MuiThemeProvider>
		<RecipeList url="hi">
		</RecipeList>
	</MuiThemeProvider>,
	document.getElementById("app")
);
