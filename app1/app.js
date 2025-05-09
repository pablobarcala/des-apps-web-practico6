const express = require('express');
const bodyParser = require('body-parser');
const personaRouter = require('./presentacion/personaRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/personas', personaRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
