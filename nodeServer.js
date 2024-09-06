const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`<a href="http://localhost:5550/about">Переход на страницу about</a>\n На страницу переходили ${counterMain()} раз`);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`<a href="http://localhost:5550/">Переход на главную страницу</a>\n На страницу переходили ${counterAbout()} раз`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Cтраница не найдена</h1>');
    }
});

const port = '5550';

server.listen(port);

function letCount(){
    let count = 0;
        
    return function () {
        return ++count;
    };
}
const counterMain = letCount();
const counterAbout = letCount();
 
