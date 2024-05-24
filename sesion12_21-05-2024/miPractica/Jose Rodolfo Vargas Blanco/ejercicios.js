export const elevarAlCuadrado = (a) => {
    return a**2
}

export const raizCuadrada = n => {
    if (n < 0) return undefined; 
    return Math.sqrt(n);
  };

export const factorial = n => {
    if (n < 0) return undefined; 
    if (n === 0) return 1; 
    return n * factorial(n - 1);
  };