const encontrarPersona = (coleccionPersonas, name) => {
    
    let personaEncontrada = coleccionPersonas.find(({ nombre }) => (nombre == name))
    
    if(personaEncontrada !== undefined ){
        console.log(personaEncontrada) ; 
    } 
    else{
        console.error('El nombre no está registrado')
    }
}

class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = ciudad;
    }
}

const persona1 = new Persona('Pablito', 32, 'masculino')
const persona2 = new Persona('Guillermito', 45, 'masculino')
const persona3 = new Persona('Gabrielita', 22, 'femenino')
const persona4 = new Persona('Angita', 33, 'femeninor')
const persona5 = new Persona('Marquitos', 44, 'masculino')
const persona6 = new Persona('Sandrita', 56, 'femenino')
const persona7 = new Persona('Pedrito', 29, 'masculino')
const persona8 = new Persona('Fulanita', 32, 'femenino')

const personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8]

encontrarPersona(personas, 'Pablito')
encontrarPersona(personas, 'Guillermito')
encontrarPersona(personas, 'Pedrit')