'use strict';
let http = require('http');
let url = require('url');
let dt = require('./myModule');
let fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    // let filename = "." + q.pathname;
    // console.log(filename)
    // fs.readFile(filename, function(err, data){
    //     if(err) {
    //         res.writeHead(404, {'Content-Type': 'text/html'});
    //         return res.end("404 Not Found");
    //     }
    // })
    res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"});
    res.write('Hello '+q.query["name"] + ", the current time is " +dt.myDateTime())
    res.end();
}).listen(8888);