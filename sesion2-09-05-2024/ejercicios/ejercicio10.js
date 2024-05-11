let estudiantes = [
    { nombre: "Grecia", edad: 20},
    { nombre: "Luis", edad: 22},
    { nombre: "Ander", edad: 21},
]

let profesores = [
    { nombre: "Juan", Materia: "Matemáticas"},
    { nombre: "Medardo", Materia: "Lenguaje"},
    { nombre: "Antonio", Materia: "Ciencias"},
]

function combinarobjetos (a,b){
    let comunidadEducativa = [...a, ...b];
    return comunidadEducativa
}

let comunidad = combinarobjetos(estudiantes, profesores);
console.log(comunidad)