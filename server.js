const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Lista de livros',
    '/autores': 'Lista de autores',
    '/editoras': 'Lista de editoras',
    '/sobre': 'Sobre o curso'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
}).on('error', (err) => {'Erro: ${err.message}'});