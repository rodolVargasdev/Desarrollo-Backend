function MultiplicarPromise (a, b){
    return new Promise((resolve, reject) =>{

        const resultado = a * b

        if(isNaN(resultado)){
            reject(' ERROR NO HAY ARGUMENTOS VALIDOS ')
        }else{
            resolve(resultado)
        }
    })
}

MultiplicarPromise( 2,4 ) 
    .then((resultado) => {
        console.log(resultado)
    })
    .catch(( error ) =>{
        console.log(error)
    })
