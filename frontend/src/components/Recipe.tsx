import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

export interface RecipeCardProps {
	name: string;
	author: string;
	image: string;
}

export class RecipeCard extends React.Component<RecipeCardProps, any> {
		constructor(props: RecipeCardProps) {
			injectTapEventPlugin();

			super(props);
		}

		render() {
			return	<RaisedButton label="{this.props.name}"/>;
		}
}
