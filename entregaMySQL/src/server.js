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

const ContenedorChat = require('./classChat');
archivoChats = new ContenedorChat ('chat');



const Productos = require('./classContainer.js');
archivoP = new Productos ('product');



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

const io = new IOServer(expressServer)

//Productos
io.on('connection', async socket => {

    let mensajes = await archivoChats.selectMsg();
    let productos = await archivoP.selecProduct() 

    console.log(`se conecto un nuevo cliente ${socket.id}`)

    socket.emit('server:products', productos)

    socket.on('client:product', async infoProduct => {

       await archivoP.insertProduct(infoProduct);
        productos = await archivoP.selecProduct()
        io.emit('server:products', productos);
    })


    
    //CHAT

    socket.emit('server:message', mensajes);

    socket.on('client:message', async infoMessage => {
        await archivoChats.saveMsg(infoMessage);
        mensajes = await archivoChats.selectMsg();
        io.emit('server:message', mensajes )
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