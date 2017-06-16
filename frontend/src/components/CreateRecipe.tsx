import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class CreateRecipe extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	state = {
		open: false,
		title: "",
		prepTime: 0,
		author: "",
		url: "",
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	handleCreate = () => {
		var payload = {
			title: this.state.title,
			prepTime: this.state.prepTime,
			author: this.state.author,
			url: this.state.url,
		};

		fetch("http://192.168.1.222:8001/submit", 
		{
			method: "POST",
			body: JSON.stringify(payload)
		})
		.then(function(res) {return res.json(); })
		.then(function(data) { console.log(data); window.location.reload()});

	};

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Create"
				primary={true}
				onTouchTap={this.handleCreate}
			/>,
		];

		return (
			<div>
				<RaisedButton label="Create" onTouchTap={this.handleOpen} />
				<Dialog
					title="Create Recipe"
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					<TextField
						hintText="Title"
						floatingLabelText="Title"
						value={this.state.title}
						onChange={(e) => this.setState({title: e.target.value}) }
						/>

					<TextField
						hintText="Author"
						floatingLabelText="Author"
						value={this.state.author}
						onChange={(e) => this.setState({author: e.target.value}) }
						/>

					<TextField
						hintText="Preptime"
						floatingLabelText="Preptime"
						value={this.state.prepTime}
						onChange={(e) => this.setState({prepTime: e.target.value}) }
						/>

					<TextField
						hintText="Picture"
						floatingLabelText="Picture"
						value={this.state.url}
						onChange={(e) => this.setState({url: e.target.value}) }
						/>

				</Dialog>
			</div>
		);
	}
}
