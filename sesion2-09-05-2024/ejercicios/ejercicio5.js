// Tomar un arreglo de números y utiliza una iteración para sumar 
// únicamente los números pares

const sumaPares = (numeros) => {
    let sumNumPares = 0;
    numeros.forEach( num => {
        
        num%2 == 0 && (sumNumPares = sumNumPares + num);

    });

    console.log(sumNumPares)
}

sumaPares([2, 3, 1, 5, 4]);