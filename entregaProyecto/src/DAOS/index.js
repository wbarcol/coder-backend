
import dotenv from "dotenv";
dotenv.config();

let ProductoDao;
let cartDao;

switch (process.env.DATABASE) {
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./productos/productoDaoFirebase.js"
    );
    const { default: CarritoDaoFirebase } = await import(
      "./carritos/carritoDaoFirebase.js"
    );

    ProductoDao = new ProductoDaoFirebase();
    cartDao = new CarritoDaoFirebase();

    break;
  case "mongo":
    const { default: ProductoDaoMongo } = await import(
      "./productos/productoDaoMongo.js"
    );
    const { default: CarritoDaoMongo } = await import(
      "./carritos/carritoDaoMongo.js"
    );

    ProductoDao = new ProductoDaoMongo();
    cartDao = new CarritoDaoMongo();

    break;
}

export { ProductoDao, cartDao };