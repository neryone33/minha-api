const express = require('express');  
const app = express();  
const port = 3000;  

// Rota raiz  
app.get('/', (req, res) => {  
  res.send('Olá, bem-vindo à minha API!');  
});  

// Iniciar o servidor  
app.listen(port, () => {  
  console.log(`Servidor rodando em http://localhost:${port}`);  
});  

const livros = [  
  { id: 1, titulo: 'A História da Física Quântica', descricao: 'Um guia essencial para entender a mecânica quântica.' },  
  { id: 2, titulo: 'Introdução à Python', descricao: 'Algoritmos e lógica de programação para iniciantes.' },  
];  

// Rota para listar livros  
app.get('/livros', (req, res) => {  
  res.json(livros);  
});  
