module.exports.ejercicio1 = () => {

    const readline = require('readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        echo: false
    })
        
            rl.question('Ingrese un número: ', (numero) =>{ 
                if( numero >= 1){
                    console.log(numero + ' El número es positivo') 
                    
                }else if( numero <= -1 ){
                    console.log(numero + ' El número es negativo')
                }else{
                    console.log('El número es 0')
                }
                rl.close()
            })
             
    }

