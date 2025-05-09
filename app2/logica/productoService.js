const repo = require('../datos/productoRepository');

module.exports = {
    crearProducto(data) {
        return repo.agregar(data);
    },
    listarProductos() {
        return repo.obtenerTodas();
    },
    actualizarProducto(id, data) {
        return repo.actualizar(id, data);
    },
    eliminarProducto(id) {
        return repo.eliminar(id);
    },
    obtenerProducto(id) {
        return repo.obtenerPorId(id);
    }
};
