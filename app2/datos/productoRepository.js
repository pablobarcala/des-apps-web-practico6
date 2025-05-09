const Producto = require('../modelo/producto');
const { v4: uuidv4 } = require('uuid');

const productos = [];

module.exports = {
    agregar(productoData) {
        const producto = new Producto(uuidv4(), productoData.nombre, productoData.descripcion, productoData.precio);
        productos.push(producto);
        return producto;
    },
    obtenerTodas() {
        return productos;
    },
    actualizar(id, nuevosDatos) {
        const index = productos.findIndex(p => p.id === id);
        if (index !== -1) {
            productos[index] = { ...productos[index], ...nuevosDatos };
            return productos[index];
        }
        return null;
    },
    eliminar(id) {
        const index = productos.findIndex(p => p.id === id);
        if (index !== -1) {
            return productos.splice(index, 1)[0];
        }
        return null;
    },
    obtenerPorId(id) {
        return productos.find(p => p.id === id);
    }
};
