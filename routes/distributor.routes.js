const express = require('express')
const { getDistributors, getDistributorById, createDistributor, updateDistributor, deleteDistributor } = require('../controllers/distibutor.controllers')

const route = express.Router()

route.get('/', getDistributors)
route.get('/:id', getDistributorById)
route.post('/', createDistributor)
route.put('/:id', updateDistributor)
route.delete('/:id', deleteDistributor)

module.exports = route;