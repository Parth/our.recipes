import React from "react";
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

export class RecipeCard extends React.Component<any, any> {
		constructor(props: any) {
			injectTapEventPlugin();

			super(props);
		}

		render() {
			return	<RaisedButton label="Default" />;
		}
}

export default RecipeCard;
