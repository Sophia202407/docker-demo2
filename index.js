console.log("index.js is being executed");
const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
  console.log("Current working directory: " + process.cwd());
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.end(err.message);
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
