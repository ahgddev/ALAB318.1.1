const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
     
    const url = req.url;
 
    if (url === '/hello') {
      res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello there!</h1> Welcome to this page!');
        res.end();
    }
    else if (url === '/goodbye') {
      res.setHeader('Content-Type', 'text/html');
        res.write('<h2>See you later...</h2>');
        res.end();
    }
    else {
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write('<p>I wonder what else we can send...</p>');
      res.end();
    }

  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });