import admin from "firebase-admin";
import dbConfig from "./dbConfig.js";



admin.initializeApp({
  credential: admin.credential.cert(dbConfig.firebase)
});

const db = admin.firestore();
console.log("Conexión establecida con Firebase")


class ContenedorFirebase {
    constructor(collectionName) {
        this.collection = db.collection(collectionName)
    }

//PRODUCTOS//

    //    CREATE: 

    async addProduct (producto) {
        try{
            const newProduct = this.collection.doc();
            await newProduct.create(producto);
            return this.getAll();
        } catch (err) {

            console.log(`Verificar hubo un error ${err}`);
        }
    }



    //    READ: 

    async getAll() {

        
        try{
            const prodSnapshot = await this.collection.get()
            const productDoc = prodSnapshot.docs
            const response = productDoc.map(user => ({
                    id: user.id,
                    producto: user.data().nombre,
                    precio: user.data().precio
            }))
            return response;
        } catch(err){
            return {error: "error buscando en coleccion"};
        }
    

    }

       //    READ: (ID)

    async getById (id) {
        try {
            const productoID = this.collection.doc(id)
            const productoDoc = await productoID.get()
            const response = productoDoc.data()    
            if(response){
                return response
            }
          } catch(err){
            return {error: "Producto no encontrado"};
        }
    }


           //    UPDATE:

        async editProd (id, productInfo) {
            try {
                const producto = this.collection.doc(id)
                const productoUpdate = await producto.update(productInfo)
                return this.getById(id);
            } catch(err){
                return {error: err};
            }
        }

            //    DELETE:

            async deletePr (id){
            try {
                const producto = this.collection.doc(id)
                const deletedProducto = await producto.delete()
                return ('Producto ELimado');
            } catch(err){
                return {error: err};
            }
        }
        


/////////////////////////////////CARRITO///////////////////////////////////////////////

    //    CREATE: Crea el carrito cuando se agrega un producto

    async addCart (productosDB) {

        
        try{


            let timestamp = new Date;
            const cart = { timestamp: timestamp, productos: [productosDB] };
            const newCart = this.collection.doc();
            await newCart.create(cart)
            return this.cartById(newCart.id)

        } catch (err) {

            return {error: err};
        }
    }

    //CREATE: agrega productos al carrito existente

    async addPrCart (IDCart, productosDB) {
        
        try{
            const cart = await this.cartById(IDCart)
            cart.productos.push(productosDB)

            const newCart = this.collection.doc(IDCart)
                const cartUpdate = await newCart.update(cart)
                return this.cartById(IDCart);
        } catch(err){
            return {error: err};
        }
    

    }

           //    READ: (ID) muestra el carrito por su ID

           async cartById (id) {
        
            try{
                const cartID = this.collection.doc(id)
                const cartDoc = await cartID.get()
                const response = cartDoc.data()    
                if(response){
                    return response
                }

            } catch(err){
                return {error: "Carrito no encontrado"};
            }
        
    
        }




//   DETELE: 
//Elimina el carrito por su ID
async cartDelete (id) {
    try {
        const cart = this.collection.doc(id)
        const deletedcart = await cart.delete()
        return ('Carrito ELimado');
    } catch(err){
        return {error: err};
    }
} 

//Elimina productos por su ID del carrito por su id
    async deleteProCart (IDCart, IDproducto) {
        
        try{


            const cart = await this.cartById(IDCart)
            let newData = cart.productos
            let cartActualizado = newData.filter(producto => producto.id != IDproducto);
            cart.productos = cartActualizado;
            const newCart = this.collection.doc(IDCart)
                const cartUpdate = await newCart.update(cart)
            return this.cartById(IDCart);

        } catch(err){
            return {error: err};
        }
    
    }


}


export default ContenedorFirebase;

