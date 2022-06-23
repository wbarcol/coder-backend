const {Router} = require('express')
const router = Router()
const productos = [{title: 'Lapiz', price: '125', thumbnail: 'https://www.ambientum.com/wp-content/uploads/2019/09/lapiz-696x348.png'}]

router.get('/', (req, res) => {
    res.render('inicio')
})

router.get('/productos', (req, res) =>{
    res.render('products', {productos})
})

router.post('/productos', (req, res) =>{
    if(productos.length){
        let ultimo = productos.length - 1;
        id = productos[ultimo].id + 1;
    } else {
        id = 1
    }

    try{
const {title, price, thumbnail} = req.body
productos.push({id, title, price, thumbnail})
res.redirect('/')
} catch (e) {
    console.log('error:', error)
    res.sendStatus(500)
}


})



module.exports = router