// Escribir una clase en JavaScript la cual almacenara informacion sobre productos de supermercado, como nombre de producto, fecha de vencimiento y precio de compra.

class Producto {
    _nombre;
    _precio;
    _fechaVencimiento;

    constructor(nombre, precio, _fechaVencimiento){
        this._nombre = nombre;
        this._precio = precio;
        this._fechaVencimiento =  new Date(fechaVencimiento);
    }
}

// Luego vamos a crear una funcion que sirve como carrito de compras, esta funcion devera recibir como parametro una lista de productos que son instancias de la clase que vamos a crear, esta funcion debera calcular el precio de compra de la lista de productos, tambien debera evaluar que ningun producto haya pasado su fecha de vencimiento.

function carritocompra(productos){
    const hoy = new Date();
    const productosValidos = productos.filter((producto) => producto._fechaVencimiento > hoy);
    return productosValidos.reduce((acumulador, producto) =>acumulador += producto._precio, 0);
}

const resultado = carritocompra([
    new Producto('leche', 4, '2022-12-15'),
    new Producto('pan', 2, '2024-12-10'),
])