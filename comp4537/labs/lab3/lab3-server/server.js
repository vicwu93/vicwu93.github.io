'use strict';
let http = require('http');
let url = require('url');
let dt = require('./date_module');
let fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"});
    res.write('Hello '+q.query["name"] + ", the current time is " +dt.myDateTime())
    res.end();
}).listen(process.env.PORT || 3000);
// process.env.PORT || 3000