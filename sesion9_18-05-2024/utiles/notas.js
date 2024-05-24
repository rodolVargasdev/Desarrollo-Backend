import fs from 'fs'
import chalk from 'chalk'


const cargarNotas = () => {
    try {
        const dataBuffer= fs.readFileSync('notas.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const guardarNotas =(notas) => {
    const dataJSON = JSON.stringify(notas)
    fs.writeFileSync('notas.json', dataJSON)
}

const agregarNotas =(title, body) => {
    const notas = cargarNotas()
    const duplicateNote = notas.find((note)=> note.title === title)

    if(!duplicateNote){
        notas.push({
            title,
            body
        })
        guardarNotas(notas)
        console.log(chalk.green.inverse ('Nota agregada'))
    }else {
        console.log(chalk.red.inverse('Nota no agregada'))
    }
}

const eliminarNotas = (title) =>{
    const notas = cargarNotas()
    const notesToKeep= notas.filter((note) => note.title !== title)

    if(notas.length > notesToKeep.length){
        guardarNotas(notesToKeep)
        console.log(chalk.green.inverse("Nota Eliminada"))
    }else {
        console.log(chalk.red.inverse('Nota no eliminada'))
    }
}

const listarNotas =() =>{
    const notas = cargarNotas()
    console.log(chalk.inverse('Tus notas'))
    notas.forEach((note) => {
        console.log(note.title)
    });
}

const leerNotas = (title) => {
    const notas= cargarNotas()
    const note= notas.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(chalk.blue(note.body)) //ojo

    }else {
        console.log(chalk.red.inverse('Nota no encontrada'))
    }
}

export{
    agregarNotas,
    eliminarNotas,
    listarNotas,
    leerNotas
}