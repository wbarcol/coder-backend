const database = require('../DB/database')


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
    
            database.destroy()
        } catch(err) {
            console.log(err)
            database.destroy()
        }
    }


//    SELECCIONA PRODUCTOS DE LA TABLA
async selecProduct(){
    try {
        const productsFromDatabase = await database.from(this.table).select('*')
        return productsFromDatabase

        database.destroy()
    } catch(err) {
        console.log(err)
        database.destroy()
    }
}


}


module.exports = Productos;