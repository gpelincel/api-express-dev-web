const express = require('express');
const cors = require('cors'); // importe o cors

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // habilite o cors aqui

app.get('/datetime', (req, res) => {
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR');
  const time = now.toLocaleTimeString('pt-BR');
  res.json({ date, time });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
