const express = require('express')
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers')

const route = express.Router()

route.get('/', getProducts)
route.get('/:id', getProductById)
route.post('/', createProduct)
route.put('/:id', updateProduct),
route.delete('/:id', deleteProduct)

module.exports = route;