'use strict';
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.query)
    res.writeHead(200, 
        {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"
    });

    res.end();
}).listen(process.env.PORT || 3000);