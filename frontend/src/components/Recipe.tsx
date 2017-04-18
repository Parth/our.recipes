import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

export interface RecipeProps { name: string; ingredients: string; }

const Recipe = () => (
	<RaisedButton label="Default" />
);

export default Recipe;
