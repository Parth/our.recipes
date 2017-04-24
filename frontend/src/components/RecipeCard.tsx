import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export interface RecipeCardProps {
	name: string;
	picture: string;
	author: string;
	prepTime: number;
	description: string;
}

export class RecipeCard extends React.Component<RecipeCardProps, any> {
	constructor(props: RecipeCardProps) {
		super(props);
	}

	style() {
		return {
			width: '250px'
		};
	}

	render() {
		return	<Card style={this.style()}>
				<CardMedia>
					<img src={this.props.picture}/>
				</CardMedia>
				<CardTitle title={this.props.name} subtitle={this.props.prepTime + " Mins of Preptime" } />
				<CardText>
					{this.props.description}
				</CardText>
			</Card>
		;
	}
}

export default RecipeCard;
