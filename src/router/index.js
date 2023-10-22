const express = require("express")
const exampleController = require("../controllers/ExampleController")
const menuController = require("../controllers/menuController")
const customerController = require("../controllers/customerController")
const categoriesController = require("../controllers/categoriesController")
const orderController = require("../controllers/orderController")
const router = express.Router()

router.get('/menus', menuController.getAll) 
router.get('/menus/:id', menuController.getById)  
router.post('/menus/create', menuController.create)
router.put('/menus/update/:id', menuController.update)
router.delete('/menus/delete/:id', menuController.delete)

router.get('/categories', categoriesController.getAll)
router.get('/categories/:id', categoriesController.getById)
router.post('/categories', categoriesController.create)
router.put('/categories/update/:id', categoriesController.update)
router.delete('/categories/delete/:id', categoriesController.delete)

router.get('/customer', customerController.getAll)
router.get('/custumer/:id', customerController.getById)
router.post('/customer/create', customerController.create)
router.put('/customer/update/:id', categoriesController.update)
router.delete('customer/delete/:id', categoriesController.delete)

router.get('/orders',orderController.getAll)
router.post('/order/create',orderController.create)


module.exports = router
