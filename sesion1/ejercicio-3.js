const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

rl.question('Ingrese una palabra: ', (cadena => {
    console.log(cadena.toUpperCase)
}))

