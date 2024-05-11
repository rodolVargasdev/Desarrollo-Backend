// Crear una función que reciba un arreglo de cadenas de texto y cuente 
// cuántas veces aparece cada palabra en todas las cadenas


function contarPalabras(array) {
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        });
    });
    return contadorPalabras;
}

let palabrasarray = ['Hola buenos días', 'Hola buenas tardes', 'hola buenas noches'];
let resultado = contarPalabras(palabrasarray);

console.log(resultado);
