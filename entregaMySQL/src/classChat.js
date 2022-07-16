const database = require('./DB/database').sqliteConnection

class ContenedorChat {
    constructor (table){
        this.table = table;
    }


    
async saveMsg(message){
    try{
        await database(this.table).insert(message);
    }
    
    catch(err){
        console.log("Error: ", err);
    }
}


async selectMsg(){
        try{
            const mensajes = await database.from(this.table).select("*")
            return mensajes;
        } catch(err){
            if (err.errno === 1) {
                /* No existe la tabla */
                const createTable = require("./DB/create_chat_table")
                await createTable;
                console.log(`Tabla ${this.table} creada`)
                return []
            } else {
                console.log("Error: ", err)
                return {error: "error buscando mensajes"}
            }
        }
    }
}


        // try{
        //     const mensajeSave = `FechaYHora: ${message.time}, UserName: ${message.username}, Mensaje: ${message.message}\n`
        //     await fs.promises.appendFile(`./${this.archivo}.txt`, mensajeSave);
        //     let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
        // } catch (error) {
        //     console.log (`Verificar hubo un error ${error}`)
        // }
   






module.exports = ContenedorChat;