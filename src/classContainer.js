const fs = require('fs')

class Contenedor {
    constructor (archivo){
        this.archivo = archivo;
    }

//    Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
    async save(message){
        try{
            const mensajeSave = `FechaYHora: ${message.time}, UserName: ${message.username}, Mensaje: ${message.message}\n`
            await fs.promises.appendFile(`./${this.archivo}.txt`, mensajeSave);
            let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }
   
}


}


module.exports = Contenedor;