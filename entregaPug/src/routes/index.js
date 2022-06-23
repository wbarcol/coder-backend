const { Router } = require('express')
const router = Router()
const { routeController, productosController, postController } = require('../controllers/rutasControllers')

router.get('/', routeController)

router.get('/productos', productosController)

router.post('/productos', postController)


module.exports = router