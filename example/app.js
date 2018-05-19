const { WebSocketServer } = require('../index');
const http = require('http');
const fs = require('fs');
const path = require('path');

const wsserver = new WebSocketServer(http);

wsserver.on('connection', socket => {
    socket.send('Connected to the server!');

    socket.on('data', data => {
        console.log(`${socket.socket.id}: ${data}`);
    });
});

wsserver.listen(1339);

/**
 * 
 * TESTING HTTP SERVER TO TEST COOKIES HANDLING (FOR wssid COOKIE)
 * 
 */

http.createServer((req, res) => {
    fs.readFile(path.resolve('./example/index.html'), (err, data) => {
        if(err) console.log(err);

        res.end(data);
    });
}).listen(3000);