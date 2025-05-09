const { v4: uuidv4 } = require('uuid');

function crearRepositorio() {
    const datos = [];
    return {
        agregar(data) {
            const nuevo = { id: uuidv4(), ...data };
            datos.push(nuevo);
            return nuevo;
        },
        obtenerTodas: () => datos,
        obtenerPorId: (id) => datos.find(d => d.id === id),
        actualizar: (id, nuevosDatos) => {
            const index = datos.findIndex(d => d.id === id);
            if (index !== -1) {
                datos[index] = { ...datos[index], ...nuevosDatos };
                return datos[index];
            }
            return null;
        },
        eliminar: (id) => {
            const index = datos.findIndex(d => d.id === id);
            return index !== -1 ? datos.splice(index, 1)[0] : null;
        }
    };
}

module.exports = crearRepositorio;
