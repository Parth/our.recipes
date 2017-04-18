import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RecipeCard from "./components/RecipeCard";

ReactDOM.render(
		<MuiThemeProvider>
			<RecipeCard 
				name="Chicken Noodle Soup"
				picture="http://assets.simplyrecipes.com/wp-content/uploads/2013/01/chicken-noodle-soup-horiz-a-1600.jpg"
				author="Parth Mehrotra"
				preptime={10}
				description="Very delicious soup"
			/>
		</MuiThemeProvider>,
		document.getElementById("app")
);
