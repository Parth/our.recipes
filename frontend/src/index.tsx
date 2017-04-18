import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Recipe from "./components/Recipe";


const App = () => (
	<MuiThemeProvider>
		<Recipe/>,
	</MuiThemeProvider>
);


ReactDOM.render(
		<MuiThemeProvider>
			<Recipe/>
		</MuiThemeProvider>,
		document.getElementById("app")
);
