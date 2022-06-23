const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static( __dirname + '/public' ))

app.set('views', path.join(__dirname, './views') )
app.set('view engine', 'ejs')

app.use('/', rutas)


app.listen(8080, (req, res) => {
    console.log('Servidor escuchando puerto 8080')
})
