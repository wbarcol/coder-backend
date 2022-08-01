

import express from "express"
const app = express()
import path from 'path'
import rutas from "./routes/index.js"

import dotenv from "dotenv";
dotenv.config();
const puerto = process.env.PUERTO
// const puerto = 8080



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/public', express.static( __dirname + '/public' ))

app.get('/', (req, res) => {
    res.send('BIENVENIDOS')
})

app.use('/api', rutas)

// app.use('/*', (req, res) =>{
//     res.status(404).send({ error : -2, descripcion: `Ruta ${req.url} con método ${req.method} aún no implementada` });
// })

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
