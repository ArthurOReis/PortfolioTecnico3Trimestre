const express = require('express');
const app = express();
const porta = 3000;
const testRoute = require('./routes/testRoute');

// Rota de teste
app.get('/', (req, res) => {
  res.send('Rota de teste funcionando!');
});

app.use('/api', testRoute); // http://localhost:3000/api/test

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});