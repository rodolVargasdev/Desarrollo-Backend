const validarObjeto = (objeto) => {
    const propiedades = ['nombre', 'direccion', 'telefono'];
    for(let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){
            let msjs = "Objeto Aprobado"
            return msjs
        }else{
            return "Objeto no aprobado"
        }
    }
}

let cliente = { nombre: 'William', direccion: 'San Miguel', telefono: 7}
console.log(validarObjeto(cliente))