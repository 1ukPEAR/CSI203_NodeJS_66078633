const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('CSI203: DIGITAL ARCHITECTURE AND OPERATING SYSTEM\nThis is a sample learning tool for the CSI 203 course. | BY: Thararat Sinsom 66078633');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
