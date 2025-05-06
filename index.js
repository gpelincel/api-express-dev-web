const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/datetime', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
