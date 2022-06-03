const fs = require('fs')

class Contenedor {
    constructor (archivo){
        this.archivo = archivo;
    }

//    Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
    async save(objeto){
        await fs.promises.writeFile(`./${this.archivo}.txt`, '')
        let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
    if(!data){
        objeto.id = 1
        const productos = [objeto]
        await fs.promises.writeFile(`./${this.archivo}.txt`, JSON.stringify(productos))
       return console.log(objeto.id)
    } else {
        data = JSON.parse(data);
        objeto.id = data.length + 1
        data.push(objeto)
        await fs.promises.writeFile(`./${this.archivo}.txt`, JSON.stringify(data))
        return console.log(objeto.id)
    }
}

//    Recibe un ID, y devuelve el objeto con ese ID, o null sino esta

    async getById(id) {
        try{
            let objetoID = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
            objetoID = JSON.parse(objetoID)
            let otro = objetoID.find ((otro) => otro.id == id);
            if (otro){
            return console.log(otro)
            }else{
                return console.log(null)
            }
            
        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }
    }

    //    Devuelve un array con los objetos presentes en el archivo

    async getAll() {
        try{
            let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
            let allData = JSON.parse(data)
            return console.log(allData)
        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }

    }

        //    Elimina del archivo el objeto con el id buscado

        async deleteById(id) {
            try{
                let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
                let obj = JSON.parse(data)
                let newObj = obj.filter( obj => obj.id != id);
                data = await fs.promises.writeFile(`./${this.archivo}.txt`, JSON.stringify(newObj))
            } catch {
                console.log (`Verificar hubo un error ${error}`)
            }

        }

        //    Elimina todos los objetos presentes en el archivo

        async deleteAll() {
        await fs.promises.writeFile(`./${this.archivo}.txt`, '')
        }
}


const compra = new Contenedor('productos')


// Primero se debe ingresar los productos

compra.save({
    title:'Pizza Napo', 
    price: 700,
    })

// Se recibe un ID, y devuelve el objeto con ese ID, o null sino esta

// compra.getById(1)

// Se obtiene un array con los objetos presentes en el archivo

// compra.getAll()

// Elimina del archivo el objeto con el id buscado

// compra.deleteById(1)

//    Elimina todos los objetos presentes en el archivo

// compra.deleteAll()