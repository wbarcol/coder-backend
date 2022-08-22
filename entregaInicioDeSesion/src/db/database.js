const knex = require('knex')

const config = {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "ejemplocoder",
    },
    pool: { min: 0, max: 7 },
  };

const configSQLite3 = {
  client: "sqlite3",
  connection: { filename: "./src/db/chatSql/chats.sqlite" },
  useNullAsDefault: true
}

const mongoConnection = `mongodb+srv://wilbarco:barcowil123@cluster0.z8au8pz.mongodb.net/mibase?retryWrites=true&w=majority`
const mysqlConnection = knex(config)
const sqliteConnection = knex(configSQLite3)

module.exports = {mysqlConnection, sqliteConnection, mongoConnection}