function operacionAsincrona(callback){
    setTimeout(() => {
        callback('Operacion asincrona completada')
    }, 2000);
}

operacionAsincrona((mensaje) =>{
    console.log(mensaje)
})