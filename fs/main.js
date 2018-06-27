// const http = require("http");
// const fs = require("fs");
// const zlib = require("zlib");
// // indexFile=fs.createReadStream("./index.html");
// const server = http.createServer((req, res) => {
//     //浏览器能支持自动解压ungzip？
//     // if(req.url="/"){
//     //     res.writeHead(200,{
//     //         "Content-Type":"text/html;charset=utf-8"
//     //     });
//     //     res.pipe(indexFile);
//     // }else if(req.url=""){

//     // }
//     if (req.headers["accept-econding"].indexOf("gzip") != -1) {
//         gzip = zlib.createGzip();
//         res.writeHead(200, {
//             "Content-Encoding": "gzip",
//             "Content-Type": "text/plain;charset=utf-8"
//         });
//         fs.createReadStream("./a.txt").pipe(gzip).pipe(res);
//     } else {
//         res.writeHead(200, {
//             "Content-Type": "text/plain;charset=utf-8"
//         });
//         fs.createReadStream("./a.txt").pipe(res);
//     }
//     res.end(req.headers["accept-encoding"]);
// });

// server.listen(1314);


const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    // 浏览器能支持自动解压ungzip？ 
    // console.log(req.headers.['accept-encoding']);
    if (req.headers['accept-encoding'].indexOf('gzip') != -1) {
        gzip = zlib.createGzip();
        res.writeHead(200, {
            'Content-Encoding': 'gzip',
            'Content-Type': 'text/plain;charset=utf-8'
        });
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf-8'
        });
        fs.createReadStream('./a.txt').pipe(res);
    }
});

server.listen(1314);