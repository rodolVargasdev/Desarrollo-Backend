class Persona{
    constructor(nombre, peso, altura){
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.IMC = peso/Math.pow(altura, 2)
    }

    mostrarIMC(){
        return console.log(`El IMC de ${this.nombre} es de ${this.IMC}`);
    }
}

const persona = new Persona('Pablito', 150, 1.7);
persona.mostrarIMC();