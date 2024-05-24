import inquirer from 'inquirer'

const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo: ',
        validate: function(value){
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion){
                return true
            }
            return 'Por favor introduce un correo valido'
        }
    }
]

inquirer.prompt(pregunta)
    .then((respuesta) =>{
        console.log(`Correo ingresado: ${respuesta.correo}`)
    })
    .catch((error) =>{
        console.log('Error al ingresar al correo', error)
    })


// inquirer.prompt([
//     {
//         type: 'checkbox',
//         name: 'frutas',
//         message: 'Selecciona tus fruta favorita',
//         choices: ['Manzana', 'Banana', 'Uvas', 'Naranja']
//     }

// ])

// .then((respuesta) =>{
//     console.log('Frutas seleccionada: ', respuesta.frutas.join(', '))
//     // console.log(respuesta.frutas)
//     if (respuesta.frutas.includes('Manzana') && respuesta.frutas.includes('Banana') ){
//         console.log('Licuado fresco')
//     }else if(respuesta.frutas.includes('Manzana') && respuesta.frutas.includes('Naranja')) {
//         console.log('Licuado acido')
//     }else if(respuesta.frutas.includes('Banana') && respuesta.frutas.includes('Naranja')) {
//         console.log('Licuado Jumex')
//     }else{
//         console.log('Licuado no disponible')
//     }
//     // M y B, licuado fresco
//     // M y N, licuado fresco
//     // B y N, licuado fresco
// })

// const pregunta = [

//     {
//         type: 'input',
//         name: 'nombre',
//         message: 'Digame su nombre',
//     },
//     {
//         type: 'confirm',
//         name: 'confirmation',
//         message: 'Seguro ese el nombre?',
//     },
//     {
//         type: 'list',
//         name: 'colores',
//         message: 'Cual es tu color favorito?',
//         choices: ['Rojo', 'Verder', 'Azul', 'Gris']
//     },
//     {
//         type: 'checkbox', //Se elige la opcion con espacioy bajamos con las flechas
//         name: 'intereses',
//         message: 'Selecciona una opcion de interes',
//         choices: ['Programacion', 'Diseño', 'Base de datos', 'Redes']
//     },
//     {
//         type: 'password',
//         name: 'contraseña',
//         message: 'Ingrese tu contraseña',
//         mask: '*'
//     }
// ]

// inquirer.prompt(pregunta).then((respuesta) => {
//     if ( respuesta.confirmation ) {
//         console.log('Confirmation exitosa')
//         console.log(`Hola ${respuesta.nombre}`)
//         console.log(`Tu color favorito es: ${respuesta.colores}`)
//         console.log(`Tus intereses son: ${respuesta.intereses.join(', ')}`) 
//         console.log(`Tu contraseña es: ${respuesta.contraseña}`)
        
//     } else {
//         console.log('No se confirmo el nombre')
//     }
// })