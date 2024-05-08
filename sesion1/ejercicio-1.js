const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

rl.question('Ingrese su nombre: ', (nombre => {
    rl.question('Ingrese su apellido: ', (apellido) =>{
        console.log(`Hola ${nombre} ${apellido} bienvenido!`) 
    })
}))


