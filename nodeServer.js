const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Главная страница</h1>');
    } else if (req.url === '/test') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Тестовая страница</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Cтраница не найдена</h1>');
    }
});

const port = '5550';

server.listen(port);