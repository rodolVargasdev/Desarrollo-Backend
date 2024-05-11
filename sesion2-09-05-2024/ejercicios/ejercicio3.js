// Toma un arreglo de objetos que represente personas con propiedades como
// nombre, edad y ciudad, y filtra las personas mayores de 30 años que
// viven en una ciudad específica

const filtrarPersonas = (coleccionPersonas, city) =>{
    coleccionPersonas.filter(({ edad, ciudad }) => (ciudad == city && edad > 30 )).forEach(({ nombre, edad, ciudad}) => {
        console.log(`${nombre} tiene ${edad} y es de ${ciudad}`)
    });
}

class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

const persona1 = new Persona('Pablito', 32, 'San Salvador')
const persona2 = new Persona('Guillermito', 45, 'San Vicente')
const persona3 = new Persona('Gabrielita', 22, 'San Salvador')
const persona4 = new Persona('Angita', 33, 'San Salvador')
const persona5 = new Persona('Marquitos', 44, 'Santa Ana')
const persona6 = new Persona('Sandrita', 56, 'San Vicente')
const persona7 = new Persona('Pedrito', 29, 'San Vicente')
const persona8 = new Persona('Fulanita', 32, 'San Salvador')

const personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8]

filtrarPersonas(personas, 'San Salvador')
filtrarPersonas(personas, 'San Vicente')
filtrarPersonas(personas, 'Santa Ana')