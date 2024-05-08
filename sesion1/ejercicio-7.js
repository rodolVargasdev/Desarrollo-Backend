const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese una cadena: ', (cadena) => {
   const cadenaInvertida = cadena.split('').reverse().join('');
   console.log(`Cadena invertida: ${cadenaInvertida}`);
})
