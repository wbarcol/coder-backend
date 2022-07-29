const { Router } = require('express')
const router = Router()
const { getAllProducts, getProduct, postProduct, putProduct, deleteProduct, getIdCart,
    postAddCart,
    deleteCart,
    postProductCart,
    deleteProductCart } = require('../controllers/rutasControllers')
    const checkAdminUtil = require("../utils/checkAdmin")

const ADMIN = true;
const checkAdmin = checkAdminUtil(ADMIN);

// router.get('/', routeController)

router.get('/productos', getAllProducts)

router.get('/productos/:id', getProduct)

router.post('/productos', checkAdmin, postProduct);

router.put('/productos/:id', checkAdmin, putProduct);

router.delete('/productos/:id', checkAdmin,  deleteProduct);

//////CARRITOS/////

router.post('/carrito', postAddCart)

router.delete('/carrito/:id', deleteCart)

router.get('/carrito/:id/productos', getIdCart);

router.post('/carrito/:id/productos', postProductCart);

router.delete('/carrito/:id/productos/:id_prod',  deleteProductCart);


module.exports = router

