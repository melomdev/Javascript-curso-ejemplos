// Los objetos son contenedores que guardan muchas variables y estas variables son de diferentes tipos.

// Crear varios objetos para guardar una lista de productos, vamos a escribir el codigo para buscar productos basados en el parametro que pasemos en la funcion de busqueda.

//Crear array de productos que cada uno incluya informacion sobre el id, nombreProducto, marca, fechaExpedicion:

const listaProductos = [
    {
        id: 1,
        nombreProducto: 'mantequilla',
        marca:'DairyGold',
        fechaExpiracion: '2024-12-20'
    },
    {
        id: 2,
        nombreProducto: 'leche',
        marca: 'Colanta',
        fechaExpiracion: '2024-11-24'
    },
    {
        id: 3,
        nombreProducto: 'pan',
        marca: 'Sancho Pan',
        fechaExpiracion: '2024-12-21'
    },
    {
        id: 4,
        nombreProducto: 'carne',
        marca: 'carne Res',
        fechaExpiracion: '2024-12-17'
    },
    {
        id: 5,
        nombreProducto: 'avena',
        marca: 'kuaquer',
        fechaExpiracion: '2024-12-03'
    },
]

// Crear dos funciones para buscar productos acorde a los parametros:

function buscarProductosPorId(id){
    return listaProductos.filter((producto) => producto.id === id);
}
console.log(buscarProductosPorId(2));

function buscarProductosPorFecha(fecha){
    return listaProductos.filter((producto) => producto.fechaExpiracion === fecha);
console.log(buscarProductosPorFecha('2024-12-03'))
}


