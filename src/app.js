import express from "express";

const app = express();

app.use(express.json());

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

app.get("/livros/:id", (req, res) => {
    let index = buscarLivro(req.params.id);
    res.json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro criado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});

function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;