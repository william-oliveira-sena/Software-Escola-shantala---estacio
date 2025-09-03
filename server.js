const express = require('express');
const mysql = require('mysql2'); // Use 'pg' se for PostgreSQL
const cors = require('cors'); // Permite que o app Expo acesse a API

const app = express();
app.use(express.json()); // Habilita o uso de JSON nas requisições
app.use(cors()); // Configura o CORS

// Configuração de conexão com o seu banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'shantala_db'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados SQL estabelecida com sucesso!');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// POST /api/alunos - Cadastra um novo aluno
app.post('/api/alunos', (req, res) => {
  const { nome, email, data_nascimento, telefone, endereco } = req.body;
  const sql = `INSERT INTO alunos (nome, email, data_nascimento, telefone, endereco) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [nome, email, data_nascimento, telefone, endereco], (err, result) => {
    if (err) {
      console.error('Erro ao inserir aluno: ', err);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
    res.status(201).json({ message: 'Aluno cadastrado com sucesso!', id: result.insertId });
  });
});

// GET /api/alunos - Obtém todos os alunos
app.get('/api/alunos', (req, res) => {
  const sql = `SELECT * FROM alunos`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar alunos: ', err);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
    res.json(results);
  });
});

// PUT /api/alunos/:id - Atualiza um aluno
app.put('/api/alunos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  const sql = `UPDATE alunos SET nome = ?, email = ?, telefone = ? WHERE id = ?`;
  db.query(sql, [nome, email, telefone, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar aluno: ', err);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
    res.json({ message: 'Aluno atualizado com sucesso!' });
  });
});

// DELETE /api/alunos/:id - Deleta um aluno
app.delete('/api/alunos/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM alunos WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar aluno: ', err);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
    res.json({ message: 'Aluno deletado com sucesso!' });
  });
});