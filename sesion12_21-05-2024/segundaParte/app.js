const fs = require('fs');
const path = require('path');

const readline = require('readline');

const documents = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
    const carpetaDel = path.join(documents, carpeta);

    fs.rmdir(carpetaDel, { recursive: true }, (err) => {
        if (err) {
            console.error('Error al eliminar la carpeta:', err);
        } else {
            console.log('Carpeta eliminada exitosamente');
        }
    });
});


// const fs = require('fs')
// const ruta = 'C:/Users/Rodolfo Vargas/Desktop/fix files/Fulsamo/Program/modulo_1/Clase1_08-05-2024/sesion12_21-05-2024/segundaParte/code.txt'

// fs.readFile(ruta, 'utf8', (err, data) =>{
//     if(err){
//         console.log('Error al leer el archivo', err)
//     }else{
//         console.log('El archivo esta leido', data)
//     }
// })


// const fs = require('fs');
// const path = require('path');
// const readline = require('readline');

// const documentos = path.join(process.env.HOME || process.env.USERPROFILE, 'Documents');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Nombre de la carpeta a crear: ', (carpeta) => {
//   const nuevaCarpeta = path.join(documentos, carpeta);

//   fs.mkdir(nuevaCarpeta, { recursive: true }, (err) => {
//     if (err) {
//       console.error('Error al crear la carpeta', err);
//     } else {
//       console.log('Carpeta creada exitosamente');
//     }
//   });
// });

// const fs = require('fs')

// const contenido = "Este es el nuevo contenido"
// fs.writeFile('archivo.txt', contenido, err => {
//     if(err){
//         console.log('Error al escribir el archivo')
//     }else{
//         console.log('El archivo esta escrito')
//     }
// })

// const fs = require('ts')

// const archivo = 'archivo.txt'

// const contenidoAgregado = '\n Este es un contenido agregado'

// fs.appendFile(archivo, contenidoAgregado, (err) =>{
//     if(err){
//         console.error('Error al entregar el contenido')
//     }else{
//         console.log('Contenido agregado')
//     }
// })

