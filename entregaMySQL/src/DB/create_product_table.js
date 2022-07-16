const database = require('./database').mysqlConnection

const createProductTable = async () => {
    try {

        // await database.schema.dropTableIfExists('product')
        
        await database.schema.createTable('product', productTable => {
            productTable.increments('id').primary()
            productTable.string('title', 50).notNullable()
            productTable.integer('price').notNullable()
            productTable.string('thumbnail', 100).notNullable()
        })
        console.log('product table created!')



    } catch(err) {
        console.log(err)

    }
}



module.exports = createProductTable();