# Autoria - Servidor Node.js

### Com base no aprendizado sobre Back-End com Node.js + Express, criei um servidor para representar meu conhecimento sobre o conteúdo.

### É preciso primeiro dar o comando:
```
npm init -y
```

### Em seguida:

```
npm i express
npm i nodemon
```

### Crie a estrutura de pastas e arquivos:

```
mkdir routes
touch index.js
cd routes
touch testeRoute.js
```

### Por fim, monte as estruturas, ficando:

#### index.js:
```javascript
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
```

#### testeRoute.js:
```javascript
const express = require('express');
const router = express.Router();

// Rota de teste em routes/testRoute.js
router.get('/test', (req, res) => {
  res.send('Rota de teste em uma sub-rota funcionando!');
});

module.exports = router;

```