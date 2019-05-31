const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
	},
	plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
