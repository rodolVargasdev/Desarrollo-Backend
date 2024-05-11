// Define un objeto que represente un producto con propiedades como
// nombre, precio y cantidad. Luego, calcula el costo toal multiplicando 
// el precio por la cantidad para varios productos y sumando los resultados

class Producto{
    constructor(articulo, precio, cantidad){
        this.articulo = articulo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = precio * cantidad
    }
}

let producto1 = new Producto('mouse', 10, 1);
let producto2 = new Producto('teclado', 20, 1);
let producto3 = new Producto('monitor', 50, 3);

//console.log(producto1)

const precioTotal = (coleccion) => {
    let subTotal = 0;
    coleccion.forEach( ({ total }) => {
        subTotal = subTotal + total;
    });
    console.log(`El subtotal de la compra es de $${subTotal}`)
}

precioTotal([producto1, producto2, producto3]);