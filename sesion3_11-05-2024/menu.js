// const ejercicio1 = () => {

//     const readline = require('readline')

//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })

//         rl.question('Ingrese un número: ', (numero) =>{ 
//             evaluar(numero);
//             if( numero >= 1){
//                 return console.log(numero + ' El número es positivo') 
//             }else if( numero <= -1 ){
//                 return console.log(numero + ' El número es negativo')
//             }else{
//                 return console.log('El número es 0')
//             }
//         })
        
        
//     }



const { ejercicio1 } = require('./ejercicio1');
const { ejercicio2 } = require('./ejercicio2');
const { ejercicio3 } = require('./ejercicio3');
const { ejercicio4 } = require('./ejercicio4');
const { ejercicio5 } = require('./ejercicio5');
const { ejercicio6 } = require('./ejercicio6');
const { ejercicio7 } = require('./ejercicio7');


let reiniciar = true;


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// No se puede añadir while porque no se detiene a que se ingresa una respuesta

    rl.question('Digite el número de ejercicio a ejecutar (1-7) u oprime 0 para salir: ', (num) => {
    console.log(`Opcion seleccionaod: ${num}`)
        switch (num*1) {
            case 0:
                reiniciar = false;
                break;
            case 1:
                ejercicio1();
                break;
            case 2:
                ejercicio2();
                break;
            case 3:
                ejercicio3();
                break;
            case 4:
                ejercicio4();
                break;
            case 5:
                ejercicio5();
                break;
            case 6:
                ejercicio6();
                break;
            case 7:
                ejercicio7();
                break;
        
            default:
                console.log('Digite un valor correcto')
                break;
            }
            rl.close()
        })

            

