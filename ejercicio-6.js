const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese una cadena: ', (cadena) => {
   const palabras = frase.split(' ');
   console.log(`Número de palabras: ${palabras.length}`);
})
