import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
		document.getElementById("example")
);
