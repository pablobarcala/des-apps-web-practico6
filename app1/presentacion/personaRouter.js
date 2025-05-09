const express = require('express');
const router = express.Router();
const service = require('../logica/personaService');

router.post('/', (req, res) => {
    const persona = service.crearPersona(req.body);
    res.status(201).json(persona);
});

router.get('/', (req, res) => {
    res.json(service.listarPersonas());
});

router.get('/:id', (req, res) => {
    const persona = service.obtenerPersona(req.params.id);
    persona ? res.json(persona) : res.status(404).send('No encontrado');
});

router.put('/:id', (req, res) => {
    const actualizada = service.actualizarPersona(req.params.id, req.body);
    actualizada ? res.json(actualizada) : res.status(404).send('No encontrado');
});

router.delete('/:id', (req, res) => {
    const eliminada = service.eliminarPersona(req.params.id);
    eliminada ? res.json(eliminada) : res.status(404).send('No encontrado');
});

module.exports = router;
