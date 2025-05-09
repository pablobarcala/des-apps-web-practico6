const express = require('express');
const router = express.Router();
const service = require('../logica/productoService');

router.post('/', (req, res) => {
    const producto = service.crearProducto(req.body);
    res.status(201).json(producto);
});

router.get('/', (req, res) => {
    res.json(service.listarProductos());
});

router.get('/:id', (req, res) => {
    const producto = service.obtenerProducto(req.params.id);
    producto ? res.json(producto) : res.status(404).send('No encontrado');
});

router.put('/:id', (req, res) => {
    const actualizado = service.actualizarProducto(req.params.id, req.body);
    actualizado ? res.json(actualizado) : res.status(404).send('No encontrado');
});

router.delete('/:id', (req, res) => {
    const eliminado = service.eliminarProducto(req.params.id);
    eliminado ? res.json(eliminado) : res.status(404).send('No encontrado');
});

module.exports = router;
