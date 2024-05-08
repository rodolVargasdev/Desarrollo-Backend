const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

rl.question('Ingrese una cadena de caracteres: ', (cadena => {
    console.log(`Su cadena de caracteres tiene: ${cadena.lenght}`)
}))

