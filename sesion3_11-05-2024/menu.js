let reiniciar = true;

const readline = require('readline');
const { ejercicio1 } = require('./ejercicio1');
const { ejercicio2 } = require('./ejercicio2');
const { ejercicio3 } = require('./ejercicio3');
const { ejercicio4 } = require('./ejercicio4');
const { ejercicio5 } = require('./ejercicio5');
const { ejercicio6 } = require('./ejercicio6');
const { ejercicio7 } = require('./ejercicio7');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


while(reiniciar){
    rl.question('Digite el número de ejercicio a ejecutar (1-7) u oprime 0 para salir:', (num) =>
    {
        switch (num) {
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
    })
}