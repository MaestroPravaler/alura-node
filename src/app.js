import express from "express";

const app = express();

const livros = [
    {id: 1, titulo: 'Harry Potter e a Pedra Filosofal', preco: 19.99},
    {id: 2, titulo: 'O Senhor dos Anéis', preco: 22.99},
]

app.get('/', (req, res) => {    
    res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

export default app;