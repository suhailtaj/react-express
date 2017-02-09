'use strict';

var path = require('path');

module.exports = function (app) {

    app.use('/api/home', require('./apis/home'));

    app.route('/version').get((req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var ua = req.headers['user-agent'];


        var pkg = require("../package.json");
        var os = require('os');
        var data = {
            name: pkg.name,
            version: pkg.version,
            hostname: os.hostname(),
            osType: os.type(),
            osNetworkInterfaces: os.networkInterfaces(),
            osUserInfo: os.userInfo(),
            osFreemem: os.freemem(),
            osTotalmem: os.totalmem(),
            osArch: os.arch(),
            osCPUs: os.cpus(),
            osRelease: os.release(),
            IP: ip,
            ua: findUserAgent(ua)
        }

        function findUserAgent(ua) {
            var $ = {};
            if (/mobile/i.test(ua))
                $.Mobile = true;

            if (/like Mac OS X/.test(ua)) {
                $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
                $.iPhone = /iPhone/.test(ua);
                $.iPad = /iPad/.test(ua);
            }

            if (/Android/.test(ua))
                $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

            if (/webOS\//.test(ua))
                $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

            if (/(Intel|PPC) Mac OS X/.test(ua))
                $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

            if (/Windows NT/.test(ua))
                $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];

            return $;
        }
        res.json(data);
    });

    app.route('/ua').get(function (req, res) {
        // var ua = 'user ' + req.headers['user-agent'];
        // res.json({ua : 'user ' + req.headers['user-agent']})

        var ua = req.headers['user-agent'],
            $ = {};

        if (/mobile/i.test(ua))
            $.Mobile = true;

        if (/like Mac OS X/.test(ua)) {
            $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
            $.iPhone = /iPhone/.test(ua);
            $.iPad = /iPad/.test(ua);
        }

        if (/Android/.test(ua))
            $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

        if (/webOS\//.test(ua))
            $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

        if (/(Intel|PPC) Mac OS X/.test(ua))
            $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

        if (/Windows NT/.test(ua))
            $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];



        res.json({ ua: $ })
    });



    // All other routes should redirect to the index.html
    app.route('/*').get(function (req, res) {
        res.sendFile(path.resolve('client' + '/index.html'));
    });
};
