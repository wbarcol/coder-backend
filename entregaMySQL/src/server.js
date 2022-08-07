const express = require("express")
const routesApi = require("./routes/indexApiRoutes").router;
const routesProdTest = require("./routes/productosTest").router;
const ChatContainer = require("./Chat")
const { contenedorProductos } = require("./controllers/apiController")
const { Server: IOServer } = require("socket.io");
const normalizeMensajes = require("../util/normalize")


const chat = new ChatContainer("chats", {
    author: {
        id: { type: String, required: true },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        edad: { type: Number, required: true },
        alias: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    text: { type: String, required: true }
});


const path = require("path")
const app = express();
const port = 8080;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, "../public")))

app.use("/api/productos", routesApi)
app.use("/api/productos-test", routesProdTest)


app.use((req, res) => {
    res.status(404).json({ error404: "Ruta no encontrada" });
})


app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});


const expressServer = app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})

const io = new IOServer(expressServer);

io.on("connection", async socket => {
    console.log("Nuevo usuario conectado")


    const mensajes = await chat.getAll();

    const normalizedMensajes = normalizeMensajes(mensajes);
 
    socket.emit("server:items-test", { productos: [], mensajes: normalizedMensajes })


    socket.on("client: producto", async producto => {
        await contenedorProductos.save(producto);

        io.emit("server:producto", producto);
    })

    socket.on("client:mensaje", async mensajeEnvio => {
        
        const savedMessage = await chat.save(mensajeEnvio);
        io.emit("server:mensaje", savedMessage);
    })
})