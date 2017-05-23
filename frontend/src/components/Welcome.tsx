import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AppBar from 'material-ui/AppBar';

export class Welcome extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	handleData = (data) => {
		this.setState({recipes : data});
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
		return (
			<div>
				<AppBar
					title="Recipe Share" />
				<p>Test</p>
			</div>
		);
	}
}

export default Welcome;
