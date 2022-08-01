
import {Router} from "express";
const router = Router()
import { getAllProducts, getProduct, postProduct, putProduct, deleteProduct } from "../controllers/productosControllers.js"
import {getIdCart, postAddCart, deleteCart, postProductCart, deleteProductCart } from "../controllers/carritosControllers.js"


// const ADMIN = true;
// const checkAdmin = checkAdminUtil(ADMIN);

// router.get('/', routeController)

router.get('/productos', getAllProducts)

router.get('/productos/:id', getProduct)

router.post('/productos',  postProduct);

router.put('/productos/:id',  putProduct);

router.delete('/productos/:id',   deleteProduct);

//////CARRITOS/////

router.post('/carrito/:id', postAddCart)

router.delete('/carrito/:id', deleteCart)

router.get('/carrito/:id/productos', getIdCart);

router.post('/carrito/:id/productos/:id_prod', postProductCart);

router.delete('/carrito/:id/productos/:id_prod',  deleteProductCart);


export default router

