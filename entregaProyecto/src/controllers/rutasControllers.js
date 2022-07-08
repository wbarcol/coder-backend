const Contenedor = require('../contenedor');
const archivoProducts = new Contenedor('products');
const contCart = new Contenedor('carritos');

//PRODUCTOS//

const getAllProducts = async (req, res)=>{
        res.send( await archivoProducts.getAll());
}


const getProduct = async (req, res) => {
    try {
        res.json( await archivoProducts.getById(req.params.id));
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`);
        res.sendStatus(500);
    }
}

const postProduct = async (req, res) => {
    try {
        await archivoProducts.addProduct(req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const putProduct = async (req, res) => {
    try {
        res.send(await archivoProducts.editProd(req.params.id, req.body))

    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteProduct = async (req, res) => {
    try {
        res.send(await archivoProducts.deletePr(req.params.id))
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

//CARRITO//



const getIdCart = async (req, res)=>{
    res.send( await contCart.cartById(req.params.id));
}


const postAddCart = async (req, res) => {
    try {
        res.send(await contCart.addCart(req.body));
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteCart = async (req, res) => {
    try {
        res.send(await contCart.cartDelete(req.params.id))
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const postProductCart = async (req, res) => {
    try {
        res.send(await contCart.addPrCart(req.params.id, req.body));


    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}

const deleteProductCart = async (req, res) => {
    try {
        res.send(await contCart.deleteProCart(req.params.id, req.params.id_prod));
        
    } catch (error) {
        console.log(`Verificar hubo un error ${error}`)
        res.sendStatus(500);
    }
}


//export
module.exports = { 
    getAllProducts, 
    getProduct, 
    postProduct,
    putProduct, 
    deleteProduct,
    getIdCart,
    postAddCart,
    deleteCart,
    postProductCart,
    deleteProductCart

 };

