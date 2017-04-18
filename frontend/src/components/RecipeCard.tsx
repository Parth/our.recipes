import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import injectTapEventPlugin from 'react-tap-event-plugin';

export interface RecipeCardProps {
	name: string;
	picture: string;
	author: string;
	preptime: number;
	description: string;
}

export class RecipeCard extends React.Component<RecipeCardProps, any> {
		constructor(props: RecipeCardProps) {
			injectTapEventPlugin();

			super(props);
		}

		render() {
			return	<Card>
					<CardHeader
						title={this.props.author}
					/>
					<CardMedia>
						<img src={this.props.picture}/>
					</CardMedia>
					<CardTitle title={this.props.name} subtitle={this.props.preptime} />
					<CardText>
						{this.props.description}
					</CardText>
				</Card>
			;
		}
}

export default RecipeCard;
