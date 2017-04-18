import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RecipeCard from "./components/RecipeCard";


ReactDOM.render(
		<MuiThemeProvider>
			<RecipeCard/>
		</MuiThemeProvider>,
		document.getElementById("app")
);
