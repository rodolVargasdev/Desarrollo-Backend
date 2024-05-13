module.exports.ejercicio3 = () =>{

    const readline = require('readline')
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question("Digite el numero a realizar el factorial ", (n1) =>{
        let resultado = 1
    
        for (let i = 0; i < n1; i++) {  
            resultado *= 1;     
        }
    
        console.log("El Factorial es: " + resultado)
    })

    
}
