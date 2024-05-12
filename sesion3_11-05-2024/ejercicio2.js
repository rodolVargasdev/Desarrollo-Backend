const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const evaluar = (numero1, numero2, numero3) => {
    if( numero1 > numero2 && numero1 > numero3 ){
        console.log(`El número ${numero1} es el mayor`)
    }else if( numero2 > numero1 && numero2 > numero3 ){
        console.log(`El número ${numero2} es el mayor`)
    }else if( numero3 > numero1 && numero3 > numero2 ){
        console.log(`El número ${numero3} es el mayor`)
    }else{
        console.log('Las cantidad son iguales')
    }
}

rl.question('Ingrese el primer número: ', (numero1) =>{ 
    rl.question('Ingrese el segundo número: ', (numero2) =>{ 
        rl.question('Ingrese el tercer número: ', (numero3) =>{ 
            
            evaluar(numero1*1, numero2*1, numero3*1)
        
        })
    
    })
})