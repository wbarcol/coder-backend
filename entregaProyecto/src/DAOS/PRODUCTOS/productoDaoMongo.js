import ContenedorMongo from "../../contenedorMongo.js";

class ProductoDaoMongo extends ContenedorMongo {
  constructor() {
    super("producto", {
      nombre: { type: String, required: true },
      precio: { type: Number, required: true },
      thumbnail: { type: String, required: true },
    });
  }
}

export default ProductoDaoMongo;