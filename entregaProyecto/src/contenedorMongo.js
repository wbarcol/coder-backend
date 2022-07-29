import mongoose from "mongoose";
import dbConfig from "../dbConfig.js";

await mongoose.connect(dbConfig.mongodb.connectionString);
console.log("Conexión establecida con Mongo")



class ContenedorMongo {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, new mongoose.Schema(schema));
    }

/////////////////////////////////PRODUCTOS///////////////////////////////////////////////

    //    READ:  Devuelve un array con los productos presentes en el archivo

    async getAll() {

        
        try{
            const objetos = await this.collection.find({}, { __v: 0 })
            return objetos;
        } catch(err){
            return {error: "error buscando en coleccion"};
        }
    

    }

       //    Devuelve un producto por su ID

    async getById (id) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let resultado = 'Producto no encontrado'

        let productoEncontrado = allData.find(producto => producto.id == id);
        if(!productoEncontrado){
            return resultado
        }else{
            return(productoEncontrado);
        }

    }

    // AGREAGAR PRODUCTO

    async addProduct (producto) {
        producto.timestamp = new Date().toLocaleString("fr-FR");
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let ultimo = allData.length -1;
        producto.id = allData[ultimo].id +1;
        allData.push(producto);
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
        return producto
    }

    /// EDITAR PRODUCTO

    async editProd (id, productInfo) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let productoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Producto no encontrado'

        if(!productoEncontrado){
            return resultado
        } else {

        let indiceProducto = allData.findIndex((producto) => producto.id == id);
        allData[indiceProducto] = productInfo
        allData[indiceProducto].id = id
        allData[indiceProducto].timestamp = new Date().toLocaleString("fr-FR");
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
        let resultado = 'Producto editado';
        return resultado
    }
}



    // ELIMINAR PRODUCTO

    async deletePr (id) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let productoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Producto no encontrado'

        if(!productoEncontrado){
            return resultado
        } else {

        let productosActualizados = allData.filter(producto => producto.id != id);
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(productosActualizados));
        let resultado = 'Producto eliminado';
        return resultado
    }
}
}