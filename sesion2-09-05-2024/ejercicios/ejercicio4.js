// Dado un arreglo de números, crea una nueva lista con los 
// cuadrados de cada números utilizando el método map()

const retornarCuadrados = (coleccionNums) => {
    console.log(coleccionNums.map( nums => {
        return nums**2;
    } ))
}

retornarCuadrados([2, 3, 5, 1, 4]);
