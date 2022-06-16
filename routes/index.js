const {Router} = require('express')
const router = Router()
let productos = []



router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

router.get('/productos', (req, res) => {
    res.json(productos)
})

router.post('/productos', (req, res) => {

        if(productos.length){
            let ultimo = productos.length - 1;
            id = productos[ultimo].id + 1;
        } else {
            id = 1
        }

    const {producto, precio} = req.body
    productos.push({id, producto, precio})
    res.sendStatus(201)
})

router.get('/productos/:id', (req, res, next) => {
    const id = Number(req.params.id)
    let productoEncontrado = productos.find(producto => producto.id == id);

    if(!productoEncontrado){
        return next ('error: producto no encontrado')
    }
    res.json(productoEncontrado);
})

router.put('/productos/:id', (req, res, next) => {
    const id = Number(req.params.id)
    let productoEncontrado = productos.find(producto => producto.id == id);
    productos.findIndex((producto) => producto.id == id);

    if(!productoEncontrado){
        return next ('error: producto no encontrado')
    }
    let indiceProducto = productos.findIndex((producto) => producto.id == id);
    productos[indiceProducto] = req.body
    res.json({msg: `producto con id: ${id} actualizado`});
})



router.delete('/productos/:id', (req, res, next) => {
    const id = Number(req.params.id)
    let productoEncontrado = productos.find(producto => producto.id === id)
    if(!productoEncontrado){
        return next ('error: producto no encontrado')
    }
    let productosActualizados = productos.filter(producto => producto.id != id);
    productos = productosActualizados
    res.json({msg: `producto con id: ${id} eliminado`});
})



module.exports = router