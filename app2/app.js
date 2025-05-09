const express = require('express');
const bodyParser = require('body-parser');
const productoRouter = require('./presentacion/productoRouter');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/productos', productoRouter);

app.listen(PORT, () => {
    console.log(`Servidor de productos en http://localhost:${PORT}`);
});
