const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Este un servidor básico usando express');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
