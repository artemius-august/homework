const http = require('http');
const url = require('url');

const usersStore = [
  { userName: 'Boria', id: 1, email: 'boria23@gmail.com' },
  { userName: 'Vasia', id: 2, email: 'boria23@gmail.com' },
  { userName: 'Misha', id: 3, email: 'boria23@gmail.com' },
  { userName: 'Misha', id: 4, email: 'boria23@gmail.com' },
  { userName: 'Misha', id: 5, email: 'boria23@gmail.com' },
];

function mainHandler(req, res) {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/user' && req.method === 'GET') {
    const id = parseInt(parsedUrl.query.id, 10);
    if (Number.isFinite(id)) {
      const user = usersStore.find((user) => user.id === id);
      if (user) res.write(JSON.stringify(user));
      else res.write('User with following id does not exist');
    } else {
      res.write(JSON.stringify(usersStore[0]));
    }
  } else {
    res.statusCode = 404;
    res.write('Unknown page');
  }

  res.end();
}

const server = http.createServer(mainHandler);
server.listen(8090, () => console.log('Listening 8090'));
