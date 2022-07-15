require('dotenv').config()
const express = require('express')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const { Socket } = require('dgram')
const app = express()
const puerto = process.env.PUERTO
const expressServer = app.listen(puerto, (error) => {

    try{
        console.log(`Servidor escuchando al puerto: ${puerto}`)
    }
    catch(error){
        console.log("hubo un error al inciar el servidor: ", error);
    }
})

const Contenedor = require('./classProduct');
archivoChats = new Contenedor('archivoChats');


const createdDB = require('../DB/create_product_table');
const Productos = require('./classContainer.js');
archivoP = new Productos ('product');
newTable = createdDB()

const messageArray = [];
const productos = archivoP.selecProduct()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

const io = new IOServer(expressServer)

//Productos
io.on('connection', socket => {
    console.log(`se conecto un nuevo cliente ${socket.id}`)

    socket.emit('server:products', productos)

    socket.on('client:product', infoProduct => {

        archivoP.insertProduct(infoProduct);
        io.emit('server:products', productos);
    })


    
    //CHAT

    socket.emit('server:message', messageArray);

    socket.on('client:message', infoMessage => {
        messageArray.push(infoMessage);
        archivoChats.save(infoMessage);
        io.emit('server:message', messageArray)
    })
})



// io.on('connection', socket => {
//     console.log(`se conecto un nuevo cliente ${socket.id}`)

//     socket.emit('server:mensaje', messageArray)

//     socket.on('cliente:mensaje', messageInfo =>{
//         messageArray.push(messageInfo)
//         io.emit('server:mensaje', messageArray)
//     })
// })