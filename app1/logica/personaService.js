const repo = require('../datos/personaRepository');

module.exports = {
    crearPersona(data) {
        return repo.agregar(data);
    },
    listarPersonas() {
        return repo.obtenerTodas();
    },
    actualizarPersona(id, data) {
        return repo.actualizar(id, data);
    },
    eliminarPersona(id) {
        return repo.eliminar(id);
    },
    obtenerPersona(id) {
        return repo.obtenerPorId(id);
    }
};
