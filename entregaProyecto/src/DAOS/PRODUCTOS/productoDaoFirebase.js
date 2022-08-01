import ContenedorFirebase from "../../contenedorFirebase.js";

class ProductosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super("productos")
    }
}


export default ProductosDaoFirebase;