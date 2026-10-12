// Importa os módulos do Express e Path
const express = require('express');
const path = require('path');

// Inicializa a aplicação Express
const app = express();

// Define a porta onde a API vai rodar
const PORT = 3000;

// Configura o Express para interpretar requisições no formato JSON
app.use(express.json());

// Serve os arquivos estáticos da pasta "public" e da raiz do projeto
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

// Estrutura de dados: Array de objetos representando os serviços
var servicos = [
  { id: 1, nome: "Banho e Tosa", descricao: "Banho completo para cães e gatos." },
  { id: 2, nome: "Consulta Veterinária", descricao: "Atendimento clínico para pets." },
  { id: 3, nome: "Vacinação", descricao: "Aplicação de vacinas importadas e nacionais." }
];

// Rota de serviços (GET /servicos) - Retorna a lista de serviços do pet shop em JSON
app.get('/servicos', (req, res) => {
  res.json(servicos);
});

// Inicializa o servidor para escutar as requisições na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});