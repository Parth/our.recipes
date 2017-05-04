var FixDefaultImportPlugin = require('webpack-fix-default-import-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
	publicPath: "/dist/"
	},

	devtool: "source-map",

	plugins: [
		new FixDefaultImportPlugin()
	],

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	devServer: {
		port: 3000,
		historyApiFallback: {
			index: 'index.html'
		}
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },

			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	}
};
