var webpack = require('webpack');
var path = require('path');

module.exports = {
  noInfo: false,
  entry: [
	 'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/index')
  ],
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client')
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders : ['babel']
			},
			// {
			// 	test: /(\.scss)$/,
			// 	loaders: ["style", "css", "sass"]
			// },
			{
				test: /(\.css)$/,
				loaders: ['style', 'css']
			},
      {test: /\.(png|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}
