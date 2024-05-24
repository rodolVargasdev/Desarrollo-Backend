// EJERCICIO 1 //

// const shuffle = require('lodash/shuffle')

// const array = [9, 3, 5, 3, 4]

// const arrayAcomodado = shuffle(array)

// console.log(arrayAcomodado)


// EJERCICIO 2 //

// Importamos la librería Express
// const express = require('express');

// // Creamos una instancia de la aplicación Express
// const app = express();

// // Definimos el puerto en el que escucharemos las peticiones
// const PORT = 4800;

// // Definimos una ruta para la raíz ('/')
// app.get('/', (req, res) => {
//   // Enviamos una respuesta al cliente
//   res.send('Este es un servidor básico usando Express');
// });

// // Arrancamos el servidor en el puerto definido
// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en http://localhost:${PORT}`);
// });


// ULTIMO EJERCICIO //

const nodemailer = require('nodemailer');

// Datos de la cuenta de correo electrónico del remitente
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: 'jose-vargas172011@hotmail.com',
    pass: 'RANGOCOM' // Reemplaza con tu contraseña real
  }
});

// Opciones del mensaje
const mensaje = {
  from: '"José Rodolfo Vargas Blanco" <jose-vargas172011@hotmail.com>',
  to: 'iav.xngie.di4z@ufg.edu.sv',
  subject: 'Sesion 4 Actividad con nodemailer',
  html: '<h1 class="neon-text" style="color: rgb(218, 111, 186);">Angie Michelle Díaz de Vargas</h1><p>I know your secret stop lying... I hope you can be strong enough to tell me</p>',

};

// Envía el correo electrónico
transporter.sendMail(mensaje, (err, info) => {
  if (err) {
    console.log('Error al enviar el correo electrónico:', err);
  } else {
    console.log('Correo electrónico enviado correctamente:', info.messageId);
  }
});
