var webpack = require('webpack');
var path = require('path');

// module.export = {
// 	entry: {
// 		'main': './client/index.js'
// 	},
// 	output: {
// 		path: './dist',
// 		filename: 'bundle.js'
// 	},
// 	devServer: {
// 		contentBase: './client'
// 	}
// }

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
    ]
  }
}
