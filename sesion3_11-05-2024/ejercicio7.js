module.exports.ejercicio7 = () =>{

    const readline = require('readline');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question("Digite el la categoría del vehículo: ", (categoria) =>{
        let tipoVehiculo;
        switch (categoria) {
            case 'Moto':
                tipoVehiculo = 'Motocileta'
                break;
    
            case 'Auto':
                tipoVehiculo = 'Automovil'
                break;
    
            case 'Camion':
                tipoVehiculo = 'Super Camion'
                break;
    
            case 'Bicicleta':
                tipoVehiculo = 'Super Bicicleta'
                break;
                
            default:
                tipoVehiculo = 'La categoria digitada no existe'
                break;
        }
        
        console.log(tipoVehiculo)
    })
    
}





