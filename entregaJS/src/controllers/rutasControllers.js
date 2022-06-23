const productos = [{title: 'Lapiz', price: '125', thumbnail: 'https://www.ambientum.com/wp-content/uploads/2019/09/lapiz-696x348.png'}];

const routeController = (req, res) => {
    res.render('main.ejs')
  
}

const productosController = (req, res) => {
    res.render('mainProductos.ejs', {productos})
    }

 const postController = (req, res) => {
    if(productos.length){
        let ultimo = productos.length - 1;
        id = productos[ultimo].id + 1;
    } else {
        id = 1
    }


const {title, price, thumbnail} = req.body
productos.push({id, title, price, thumbnail})
res.redirect('/')


        }


module.exports = {
    routeController,
    productosController,
    postController

}

