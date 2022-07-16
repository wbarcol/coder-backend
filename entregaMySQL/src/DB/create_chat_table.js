const database = require('./database').sqliteConnection

const createChatTable = async () => {
    try {

        // await database.schema.dropTableIfExists('product')
        
        await database.schema.createTable('chat', chatTable => {
            chatTable.increments('id').primary()
            chatTable.string('username', 50).notNullable()
            chatTable.integer('message', 300).notNullable()
            chatTable.string('time', 100).notNullable()
        })
        console.log('chat table created!')

       

    } catch(err) {
        console.log(err)
    
    }
}



module.exports = createChatTable();