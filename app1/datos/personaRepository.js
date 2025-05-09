const Persona = require('../modelo/persona');
const { v4: uuidv4 } = require('uuid');

const personas = [];

module.exports = {
    agregar(personaData) {
        const persona = new Persona(uuidv4(), personaData.nombre, personaData.apellido, personaData.edad);
        personas.push(persona);
        return persona;
    },
    obtenerTodas() {
        return personas;
    },
    actualizar(id, nuevosDatos) {
        const index = personas.findIndex(p => p.id === id);
        if (index !== -1) {
            personas[index] = { ...personas[index], ...nuevosDatos };
            return personas[index];
        }
        return null;
    },
    eliminar(id) {
        const index = personas.findIndex(p => p.id === id);
        if (index !== -1) {
            return personas.splice(index, 1)[0];
        }
        return null;
    },
    obtenerPorId(id) {
        return personas.find(p => p.id === id);
    }
};