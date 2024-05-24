import inquirer from "inquirer";

let correoUser = '';
let passwordUser = '';
let nameUser = '';

const verificarEdad = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Introduce su nombre',
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Introduce tu edad',
    },
    {
        type: 'confirm',
        name: 'confirmation',
        message: 'Los datos introducidos son correctos?',
    },
];

inquirer.prompt(verificarEdad).then((respuesta) => {
    if (respuesta.confirmation) {
        if (respuesta.edad >= 18) {
            console.log('Confirmacion exitosa');
            console.log(`Hola ${respuesta.nombre}, por favor regístrate: `);
            nameUser = respuesta.nombre;

            const almacenarCredenciales = [
                {
                    type: 'input',
                    name: 'email',
                    message: 'Introduzca su email',
                    validate: function(value) {
                        const validacion = value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0]+\.[a-zA-Z0-9-.]+$/);
                        if (validacion) {
                            return true;
                        }
                        return 'Por favor introduce un correo valido';
                    }
                },
                {
                    type: 'password',
                    name: 'contraseña',
                    message: 'Introduzca su contraseña',
                    mask: '*'
                },
                {
                    type: 'confirm',
                    name: 'confirmation',
                    message: 'Los datos introducidos son correctos?',
                },
            ];

            inquirer.prompt(almacenarCredenciales)
                .then((respuesta) => {
                    console.log(`Correo y contraseña ingresado, inicia sesión por favor`);
                    correoUser = respuesta.email;
                    passwordUser = respuesta.contraseña;

                    const iniciarSesion = [
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Introduzca su email',
                            validate: function(value) {
                                const validacion = value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0]+\.[a-zA-Z0-9-.]+$/);
                                if (validacion) {
                                    return true;
                                }
                                return 'Por favor introduce un correo valido';
                            }
                        },
                        {
                            type: 'password',
                            name: 'contraseña',
                            message: 'Ingrese tu contraseña',
                            mask: '*'
                        },
                        {
                            type: 'confirm',
                            name: 'confirmation',
                            message: 'Seguro de ingresar los datos?',
                        }
                    ];

                    inquirer.prompt(iniciarSesion).then((respuesta) => {
                        if (respuesta.confirmation) {
                            if (respuesta.email === correoUser && respuesta.contraseña === passwordUser) {
                                console.log(`Hola ${nameUser} bienvenido`);
                            }
                        } else {
                            console.log('Error al confirmar');
                        }
                    });
                })
                .catch((error) => {
                    console.log('Error al ingresar al correo', error);
                });
        } else {
            console.error(`Debes de ser mayor de 18`);
        }
    } else {
        console.log('No se confirmaron los datos');
    }
});
