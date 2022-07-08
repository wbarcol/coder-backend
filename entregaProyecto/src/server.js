require('dotenv').config()

const express = require('express')
const app = express()
const puerto = process.env.PUERTO
const path = require('path')
const rutas = require('./routes/index')
// const puerto = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static( __dirname + '/public' ))

app.get('/', (req, res) => {
    res.send('BIENVENIDOS')
})

app.use('/api', rutas)

app.use('/*', (req, res) =>{
    res.status(404).send({ error : -2, descripcion: `Ruta ${req.url} con método ${req.method} aún no implementada` });
})

app.use((error, req, res, next) =>{
    res.status(500).send(error)
})


app.listen(puerto, (error) => {
    try{
        console.log(`El servidor está escuchando el puerto: ${puerto}`)
    } catch {
        console.log(`Error: ${error}`);
    }
})
