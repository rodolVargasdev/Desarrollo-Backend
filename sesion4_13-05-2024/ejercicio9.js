function tarea1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tarea 1 funcionando")
        }, 3000);
    })
}
function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 2 funcionando")
        }, 3000);
    })
}
function tarea3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 3 funcionando")
        }, 3000);
    })
}

Promise.all([tarea1(), tarea2(), tarea3()])
.then((resultado) =>{
    console.log("Las tareas han finalizado: ")
    resultado.forEach((resultado) => {
        console.log(resultado)
    })
})
.catch((error) =>{
    console.log('Error: ', error)
})