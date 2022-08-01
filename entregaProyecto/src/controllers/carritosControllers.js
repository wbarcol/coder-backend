
import { cartDao } from "../daos/index.js";
import { ProductoDao } from "../daos/index.js";
import dotenv from "dotenv";
dotenv.config();

const dbfirebase = process.env.DATABASE

const getIdCart = async (req, res)=>{
    res.send( await cartDao.cartById(req.params.id));
}


const postAddCart = async (req, res) => {
    try {
        let productosDB = await ProductoDao.getById(req.params.id);
        if (dbfirebase == 'firebase'){
            productosDB.id = req.params.id_prod
        }
        res.send(await cartDao.addCart(productosDB));
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteCart = async (req, res) => {
    try {
        res.send(await cartDao.cartDelete(req.params.id))
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const postProductCart = async (req, res) => {
    try {
        let productosDB = await ProductoDao.getById(req.params.id_prod)
        if (dbfirebase == 'firebase'){
            productosDB.id = req.params.id_prod
        }
        res.send(await cartDao.addPrCart(req.params.id, productosDB));


    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteProductCart = async (req, res) => {
    try {
        res.send(await cartDao.deleteProCart(req.params.id, req.params.id_prod));
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}


//export
export { 

    getIdCart,
    postAddCart,
    deleteCart,
    postProductCart,
    deleteProductCart

 };
