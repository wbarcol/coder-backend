const fs = require('fs');



class Contenedor {
    constructor (archivo){
        this.archivo = archivo;
    }

/////////////////////////////////PRODUCTOS///////////////////////////////////////////////

    //    Devuelve un array con los productos presentes en el archivo

    async getAll() {
        try{
            let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
            let allData = JSON.parse(data)
            return (allData)

        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }

    }

       //    Devuelve un producto por su ID

    async getById (id) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let resultado = 'Producto no encontrado'

        let productoEncontrado = allData.find(producto => producto.id == id);
        if(!productoEncontrado){
            return resultado
        }else{
            return(productoEncontrado);
        }

    }

    // AGREAGAR PRODUCTO

    async addProduct (producto) {
        producto.timestamp = new Date().toLocaleString("fr-FR");
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let ultimo = allData.length -1;
        producto.id = allData[ultimo].id +1;
        allData.push(producto);
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
        return producto
    }

    /// EDITAR PRODUCTO

    async editProd (id, productInfo) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let productoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Producto no encontrado'

        if(!productoEncontrado){
            return resultado
        } else {

        let indiceProducto = allData.findIndex((producto) => producto.id == id);
        allData[indiceProducto] = productInfo
        allData[indiceProducto].id = id
        allData[indiceProducto].timestamp = new Date().toLocaleString("fr-FR");
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
        let resultado = 'Producto editado';
        return resultado
    }
}



    // ELIMINAR PRODUCTO

    async deletePr (id) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let productoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Producto no encontrado'

        if(!productoEncontrado){
            return resultado
        } else {

        let productosActualizados = allData.filter(producto => producto.id != id);
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(productosActualizados));
        let resultado = 'Producto eliminado';
        return resultado
    }
}

/////////////////////////////////CARRITO///////////////////////////////////////////////

    //    crea carrito

    async addCart (producto) {
        const carrito ={}
        carrito.timestamp = new Date().toLocaleString("fr-FR");
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let ultimo = allData.length -1;
        carrito.id = allData[ultimo].id +1;
        carrito.productos = [producto]

        producto.id = 1;

        producto.timestamp = new Date().toLocaleString("fr-FR");
        allData.push(carrito)
        await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
        return  carrito
    }

    //   elimina un carrito

    async cartDelete (id) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let carritoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Carrito no encontrado'
            
        if(!carritoEncontrado){
            return resultado
        } else {
            
            let carritosActualizados = allData.filter(producto => producto.id != id);
            await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(carritosActualizados));
            let resultado = 'Carrito eliminado';
            return resultado
                }
            }

           //    Devuelve productos del carrito por ID

           async cartById (id) {
            let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
            let allData = JSON.parse(data)
            let productoEncontrado = allData.find(producto => producto.id == id);
            let resultado = 'Carrito no encontrado'
    
            if(!productoEncontrado){
                return resultado
            } else {
    
            let indiceProducto = allData.findIndex((producto) => producto.id == id);
            let productsCart = allData[indiceProducto].productos
            return productsCart
        }
    }

    async deleteProCart (id, id_prod) {
        let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
        let allData = JSON.parse(data)
        let carritoEncontrado = allData.find(producto => producto.id == id);
        let resultado = 'Carrito no encontrado'
            
        if(!carritoEncontrado){
            return resultado
        } else {

            let indiceCart = allData.findIndex((producto) => producto.id == id);
            let productsCart = allData[indiceCart].productos
            let cartActualizado = productsCart.filter(producto => producto.id != id_prod);
            allData[indiceCart].productos = cartActualizado
            await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
            let resultado = 'producto eliminado';
            return resultado
                }
            }


            async addPrCart (id, producto) {

                let data = await fs.promises.readFile(`./src/utils/${this.archivo}.json`, 'utf-8')
                let allData = JSON.parse(data)
                let carritoEncontrado = allData.find(producto => producto.id == id);
                let resultado = 'Carrito no encontrado'
                if(!carritoEncontrado){
                    return resultado
                } else {
                    let indiceCart = allData.findIndex((producto) => producto.id == id);
                    let productsCart = allData[indiceCart].productos
                producto.timestamp = new Date().toLocaleString("fr-FR");
                let dataProducts = productsCart
                let ultimo = dataProducts.length -1;
                producto.id = dataProducts[ultimo].id +1;
                allData[indiceCart].productos.push(producto)
                await fs.promises.writeFile(`./src/utils/${this.archivo}.json`, JSON.stringify(allData));
                return (allData[indiceCart].productos)

            }
        }


}

module.exports = Contenedor;