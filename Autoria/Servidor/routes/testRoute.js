const express = require('express');
const router = express.Router();

// Rota de teste em routes/testRoute.js
router.get('/test', (req, res) => {
  res.send('Rota de teste em uma sub-rota funcionando!');
});

module.exports = router;