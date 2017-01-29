'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join('..', 'client')));
//if Only On development

var webpack = require('webpack');
var config = require('../webpack.config.js')
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

require('./routes')(app);


var server = app.listen(8080, function(){
 	var port = server.address().port;
 	console.log('\nExpress server listening on port ' + port + ', in ' + process.env.NODE_ENV + ' mode')
})
server.on('error', function(e){
	if(e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + process.env.NODE_ENV + 'mode')
	} else {
		process.exit(1);
	}
})

module.exports = server;
