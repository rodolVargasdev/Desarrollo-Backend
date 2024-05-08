const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar: '), (palabraCambiar => {
        rl.question('Ingrese la nueva palabra: '), (nuevaPalabra => {
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'git'), nuevaPalabra)
            console.log('Frase modificada: ', fraseModificada)
        })
    })
})

