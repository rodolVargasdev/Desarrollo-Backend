const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const evaluar = (numero) => {
    if( numero >= 1){
        return console.log(numero + ' El número es positivo') 
    }else if( numero <= -1 ){
        return console.log(numero + ' El número es negativo')
    }else{
        return console.log('El número es 0')
    }
}

rl.question('Ingrese un número: ', (numero) =>{ 

    evaluar(numero);

})