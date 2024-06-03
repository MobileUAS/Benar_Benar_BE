const express = require('express')
const route = express.Router()

const userRoute = require('./user.routes')
const suplierRoute = require('./suplier.routes')
const productRoute = require('./product.routes')
const distibutorRoute = require('./distributor.routes')
const reportRoute = require('./reports.route')
route.get('/', (req, res) => {
    res.json("express mongoose halo")
})

route.use('/users', userRoute)
route.use('/supliers', suplierRoute)
route.use('/products', productRoute)
route.use('/distributors', distibutorRoute)
route.use('/reports', reportRoute)

module.exports = route