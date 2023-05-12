const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/content/content.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.scss$/, // Match .scss files
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							// specify options for the loader here
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	output: {
		filename: 'content.js',
		path: path.resolve(__dirname, 'build/scripts'),
		publicPath: '/',
	},
};
