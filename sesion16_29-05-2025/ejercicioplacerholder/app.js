import axios from 'axios';
import inquirer from 'inquirer'

const api = 'https://jsonplaceholder.typicode.com/todos';
const sidd = 4;

function generarNumerosAleatoriosUnicos(min, max, cantidad) {
  const numeros = new Set();
  
  while (numeros.size < cantidad) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.add(numero);
}

  return Array.from(numeros);
}

async function getAll() {
  try {
    const response = await axios.get(`${api}`);
    console.log('\nGET: Lista Completa');
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener la lista completa', error);
  }
}

async function getById(myId) {
  try {
    const response = await axios.get(`${api}`);
    console.log(`\nGet: El ID seleccionado es: ${myId}. Y tiene como titulo: `);
    response.data.map( (objeto) => { objeto.id == myId ? console.log(objeto.title):false });
  } catch (error) {
    console.error('Error al obtener la lista completa', error);
  }
}

async function getByTitle() {
  try {
    const response = await axios.get(`${api}`);
    console.log('\nGET: Listando por titulo:')
    response.data.map( (objeto) => { console.log(objeto.title) });
  } catch (error) {
    console.error('\nError al obtener la lista completa', error);
  }
}

async function getFiveRandom() {
  try {

    console.log(`\nGET: Mostrando cinco datos aleatorios: `);

    const response = await axios.get(`${api}`);
    let numeros = generarNumerosAleatoriosUnicos(1, response.data.length, 5);

    for (let i = 0; i < 5; i++) {
      if (response.data.length === 0) {
        return undefined; // O cualquier valor o mensaje de error adecuado
      }
      // Generar un índice aleatorio entre 0 y arr.length - 1
      const indiceAleatorio = Math.floor(Math.random() * response.data.length);

      // Devolver el elemento en el índice aleatorio
      console.log(response.data[indiceAleatorio]);
      
    }

   
  } catch (error) {
    console.error('Error al obtener la lista completa', error);
  }
}


async function runAll() {
  await getAll();
}
async function runById(myId) {
  await getById(myId);
}
async function runByTitle() {
  await getByTitle();
}
async function runRandom() {
  await getFiveRandom();
}

const main = [   
    {
        type: 'list',
        name: 'choice',
        message: '\nQué desea realizar?',
        choices: ['Listar todo', 'Lista por ID específico', 'Listar todos los titles', 'Mostrar solo 5 registros', 'salir']
    },  
]

const begin = () => {
  inquirer.prompt(main)
  .then((respuesta) => {
    menu(respuesta);
  });
} 

const menu = ( respuesta ) => {
  if ( respuesta.choice === 'Listar todo' ){
    runAll();
    begin();
  }else if( respuesta.choice === 'Lista por ID específico'){

    const preguntaID = [
      {
          type: 'input',
          name: 'idUser',
          message: 'Proporcioname el id',
      },
    ];
    inquirer.prompt(preguntaID)
      .then((respuesta) => {
        runById(respuesta.idUser);
        begin();
    });

  } else if ( respuesta.choice === 'Listar todos los titles'){
    runByTitle();
    begin();
  } else if ( respuesta.choice === 'Mostrar solo 5 registros'){
    runRandom();
    begin();
  } else if ( respuesta.choice === 'salir') {
    console.log('Cerrando programa...')
  } else {
    console.log('Error, vuelve a intentar')
    begin();
  }
}

begin();

// }).catch((error) => {
// console.log('Error al ingresar el dato', error);
// }




