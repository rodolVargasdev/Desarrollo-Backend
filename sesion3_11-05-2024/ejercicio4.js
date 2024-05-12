const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite el numero a realizar el factorial ", (num) =>{
    if (num%2 === 0) {
        console.log("El número es par")
    }else{
        console.log("El número es par")
    }
})