export const ejercicio6 = () =>{

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question("Ingrese el primer color: ", (numero) => {
        switch (numero) {
            case 1:
                console.log("Enero") ;
                
            case 2:
                console.log("Febrero") ;
                
            case 3:
                console.log("Marzo") ;
                
            case 4:
                console.log("Abril") ;
                
            case 5:
                console.log("Mayo") ;
            case 6:
                console.log("Junio") ;
                
            case 7:
                console.log("Julio") ;
                
            case 8:
                console.log("Agosto") ;
                
            case 9:
                console.log("Septiembre") ;
                
            case 10:
                console.log("Octubre") ;
                
            case 11:
                console.log("Noviembre") ;
                
            case 12:
                console.log("Diciembre") ;
            default:
                console.log("Error: Ingresa un número válido de mes (entre 1 y 12).") ;
        }
      });
      

}


