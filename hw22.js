const http = require('http');
const url = require('url');

function mainHandler(req, res) {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/user' && req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => body.push(chunk));
    req.on('end', () => {
      let bodyObject;
      try {
        bodyObject = JSON.parse(body);
      } catch (e) {
        return res.write('Bad format');
      }

      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify({ ...bodyObject, teacher: 'Sergei' }));
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.write('Unknown page');
    res.end();
  }
}

const server = http.createServer(mainHandler);
server.listen(3000, () => console.log('Listening 3000'));
