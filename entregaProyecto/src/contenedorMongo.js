import mongoose from "mongoose";
import dbConfig from "./dbConfig.js";


import dotenv from 'dotenv';
dotenv.config();


await mongoose.connect(dbConfig.mongo.connectionString);
console.log("Conexión establecida con Mongo")



class ContenedorMongo {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, new mongoose.Schema(schema));
    }

//PRODUCTOS//

    //    CREATE: 

    async addProduct (producto) {
        try{
            const newProd = new this.collection(producto)
            await newProd.save()
            return newProd;
        } catch (err) {

            console.log(`Verificar hubo un error ${err}`);
        }
    }



    //    READ: 

    async getAll() {

        
        try{
            const objetos = await this.collection.find({}, { __v: 0 })
            return objetos;
        } catch(err){
            return {error: "error buscando en coleccion"};
        }
    

    }

       //    READ: (ID)

    async getById (id) {
        try {
            const doc = await this.collection.find({_id:id}, { __v: 0 });            
            if(doc){
                return doc
            }
          } catch(err){
            return {error: "Producto no encontrado"};
        }
    }


           //    UPDATE:

        async editProd (id, productInfo) {
            try {
                
                const doc = await this.collection.updateOne({_id:id}, {$set: productInfo});
                return doc;
            } catch(err){
                return {error: err};
            }
        }

            //    DELETE:

            async deletePr (id){
            try {
                const doc = await this.collection.deleteOne({_id:id});
                return doc;
            } catch(err){
                return {error: err};
            }
        }
        


/////////////////////////////////CARRITO///////////////////////////////////////////////

    //    CREATE: Crea el carrito cuando se agrega un producto

    async addCart (productosDB) {
        try{
            let timestamp = new Date;
            const cart = { timestamp: timestamp, productos: productosDB };
            const newCart = new this.collection(cart)
            await newCart.save()
            return newCart

            return (newCart)
        } catch (err) {

            return {error: err};
        }
    }

    //CREATE: agrega productos al carrito existente

    async addPrCart (IDCart, productosDB) {
        
        try{
            const productoDB = productosDB[0]
        const cart = await this.collection.findOne({_id:IDCart}, { __v: 0 })
        cart.productos.push(productoDB)
        const cartUp = new this.collection(cart)
        await cartUp.save()
        return cartUp
        } catch(err){
            return {error: err};
        }
    

    }

           //    READ: (ID) muestra el carrito por su ID

           async cartById (id) {
        
            try{
                const objetos = await this.collection.findOne({_id:id}, { __v: 0 })
                return objetos;
            } catch(err){
                return {error: "error buscando en coleccion"};
            }
        
    
        }




//   DETELE: 
//Elimina el carrito por su ID
async cartDelete (id) {
    try {
        const doc = await this.collection.deleteOne({_id:id});
        return ('Carrito Eliminado')
    } catch(err){
        return {error: err};
    }
} 

//Elimina productos por su ID del carrito por su id
    async deleteProCart (IDCart, IDproducto) {
        
        try{
            const objetos = await this.collection.findOne({_id:IDCart}, { __v: 0 })
            let newData = objetos.productos
            let cartActualizado = newData.filter(producto => producto._id != IDproducto);
            objetos.productos = cartActualizado;

            return (objetos)
        } catch(err){
            return {error: err};
        }
    
    }


}


export default ContenedorMongo;