import { ProductoDao } from "../daos/index.js";


//PRODUCTOS//

const getAllProducts = async (req, res)=>{
        res.json( await ProductoDao.getAll());
}


const getProduct = async (req, res) => {
    try {
        res.json( await ProductoDao.getById(req.params.id));
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`);
        res.sendStatus(500);
    }
}

const postProduct = async (req, res) => {
    try {
        res.json(await ProductoDao.addProduct(req.body));
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const putProduct = async (req, res) => {
    try {
        res.send(await ProductoDao.editProd(req.params.id, req.body))

    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteProduct = async (req, res) => {
    try {
        res.send(await ProductoDao.deletePr(req.params.id))
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

export { getAllProducts, 
    getProduct, 
    postProduct,
    putProduct, 
    deleteProduct };