import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import injectTapEventPlugin from 'react-tap-event-plugin';



export interface RecipeListProps {
	url: string;
}

export class RecipeList extends React.Component<RecipeListProps, any> {
	constructor(props: RecipeListProps) {
		super(props);
		injectTapEventPlugin();

		this.state = {
			recipes: []
		};

		this.handleData = this.handleData.bind(this);

	}

	handleData = (data) => {
		this.setState({recipes : data});
	}

	componentDidMount() {
		fetch("http://localhost:4567/recipes")
			.then( (response) => {
				return response.json() })   
					.then( (json) => {
						this.setState({recipes: json});
					});
	}

	readonly style = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
		},
		gridList: {
			width: 500,
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
					<Subheader>December</Subheader>
					{this.state.recipes.map((tile) => (
						<GridTile
							key={tile.name}
							title={tile.name}
							subtitle={<span>by <b>{tile.author}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
						>
							<img src={tile.url} />
						</GridTile>
					))}
				</GridList>
			</div>
		);
	}
}

export default RecipeList;
