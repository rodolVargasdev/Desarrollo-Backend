class Bebe {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad =  edad;
    }

    comportamientoLlorar(){
        return console.log(`El niño ${this.nombre} está llorando`)
    }

    comportamientoDormir(){
        return console.log(`El niño ${this.nombre} está durmiendo`)
    }

    comportamientoComer(){
        return console.log(`El niño ${this.nombre} de ${this.edad} está comiendo`)
    }
}

const bebe1 = new Bebe('Anacletito', 'De ocho meses');
const bebe2 = new Bebe('Pablito', 'De ocho meses');
const bebe3 = new Bebe('Concepcion', 'De ocho meses');

bebe1.comportamientoComer();
bebe1.comportamientoDormir();
bebe1.comportamientoLlorar();

bebe2.comportamientoComer();
bebe2.comportamientoDormir();
bebe2.comportamientoLlorar();

bebe3.comportamientoComer();
bebe3.comportamientoDormir();
bebe3.comportamientoLlorar();

