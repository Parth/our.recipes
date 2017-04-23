import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import RecipeCard from "./RecipeCard";

export interface RecipeListProps {
	url: string;
}

export class RecipeList extends React.Component<RecipeListProps, any> {
	constructor(props: RecipeListProps) {
		super(props);

		this.state = {
			recipes: []
		};

		this.handleData = this.handleData.bind(this);

	}

	handleData = (data) => {
		this.setState({recipes : data});
	}

	componentDidMount() {
		fetch("http://192.168.1.222:8001/recipes")
			.then( (response) => {
				return response.json() })   
					.then( (json) => {
						this.setState({recipes: json});
					});
	}

	readonly style = {
		root: {
			paddingTop: '10px',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
		},
		gridList: {
			width: 600,
			height: 450,
			overflowY: 'auto',
		}
	}

	render() {
		return (<div style={this.style.root as any}>
				<GridList
					cellHeight={180}
					style={this.style.gridList as any}
				>
					{this.state.recipes.map((tile) => (
						<RecipeCard
							key={tile.name}
							name={tile.name}
							picture={tile.url}
							author={tile.author}
							preptime={tile.prepTime}
							description={tile.name}

						/>
					))}
				</GridList>
			</div>
		);
	}
}

export default RecipeList;
