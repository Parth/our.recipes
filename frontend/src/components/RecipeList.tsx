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
	readonly tilesData = [
		{
			img: 'food.jpg',
			title: 'Breakfast',
			author: 'jill111',
		},
		{
			img: 'food.jpg',
			title: 'Tasty burger',
			author: 'pashminu',
		},
		{
			img: 'food.jpg',
			title: 'Camera',
			author: 'Danson67',
		},
		{
			img: 'food.jpg',
			title: 'Morning',
			author: 'fancycrave1',
		},
		{
			img: 'food.jpg',
			title: 'Hats',
			author: 'Hans',
		},
		{
			img: 'food.jpg',
			title: 'Honey',
			author: 'fancycravel',
		},
		{
			img: 'food.jpg',
			title: 'Vegetables',
			author: 'jill111',
		},
		{
			img: 'food.jpg',
			title: 'Water plant',
			author: 'BkrmadtyaKarki',
		},
	];
	
	constructor(props: RecipeListProps) {
		super(props);
		injectTapEventPlugin();
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
					{this.tilesData.map((tile) => (
						<GridTile
							key={tile.title}
							title={tile.title}
							subtitle={<span>by <b>{tile.author}</b></span>}
							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
						>
							<img src={tile.img} />
						</GridTile>
					))}
				</GridList>
			</div>
		);
	}
}

export default RecipeList;
