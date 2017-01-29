'use strict';

var path = require('path');

module.exports = function (app) {
  app.route('/version').get((req, res) => {
	var pkg = require("../package.json");
	var os = require('os');
    res.json({
      name: pkg.name,
      version: pkg.version,
      hostname: os.hostname()
    });
  });

   // All other routes should redirect to the index.html
  app.route('/*').get(function(req, res) {
    res.sendFile(path.resolve('client' + '/index.html'));
  });
};
