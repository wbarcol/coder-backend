const database = require('./database')

const createProductTable = async () => {
    try {

        await database.schema.dropTableIfExists('product')
        
        await database.schema.createTable('product', productTable => {
            productTable.increments('id').primary()
            productTable.string('title', 50).notNullable()
            productTable.integer('price').notNullable()
            productTable.string('thumbnail', 100).notNullable()
        })
        console.log('product table created!')

        database.destroy()

    } catch(err) {
        console.log(err)
        database.destroy()
    }
}



module.exports = createProductTable();