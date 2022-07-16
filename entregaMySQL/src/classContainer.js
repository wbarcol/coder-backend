const database = require('./DB/database').mysqlConnection



class Productos {
    constructor (table){
        this.table = table;
    }

//    INSERTA PRODUCTOS EN LA TABLE
    async insertProduct(producto){
        try {
            const products = [
                { title: producto.title, price: producto.price, thumbnail: producto.thumbnail},
            ]
    
            await database(this.table).insert(products)
    
            console.log('products inserted!')

        } catch(err) {
            console.log(err)

        }
    }


//    SELECCIONA PRODUCTOS DE LA TABLA
async selecProduct(){
    try {
        const productsFromDatabase = await database.from(this.table).select('*')
        return productsFromDatabase

        // database.destroy()
    } catch(err) {
        
        if (err.errno === 1146) {
            /* no existe la tabla */
            const createTable = require("./DB/create_product_table")
            await createTable;
            console.log(`Tabla ${this.table} creada`)
            return []
        } else{
            console.log("Error: ", err)
            return {error: "error buscando producto"}
        }
    }
}


}


module.exports = Productos;