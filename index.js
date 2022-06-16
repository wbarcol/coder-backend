const express = require('express')
const app = express()
const rutas = require('./routes/index')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))


app.use('/api', rutas)

app.use((error, req, res, next) =>{
    res.status(500).send(error)
})

app.listen(8080, () => {
    console.log('Servidor escuchando el puerto 8080')
})
