class Hora {

    constructor()
    {
        this.fecha = new Date();
        this.horas = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
    }

    monstrarHoraActual(){
        return console.log(`Son las ${this.horas} con ${this.minutos} minutoss`)
    }

}



const hora = new Hora();

hora.monstrarHoraActual();