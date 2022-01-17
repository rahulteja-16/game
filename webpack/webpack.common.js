const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Copy = require('copy-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/inline',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
		// new CopyPlugin({
		// 	patterns: [{ from: '../src', to: '/build' }],
		// }),
		new Copy({
			patterns: [{ from: './public/*' }],
		}),
	],
	stats: 'errors-only',
}
