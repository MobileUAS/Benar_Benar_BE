const express = require('express')
const { getSupliers, getSuplierById, createSuplier, updateSuplier, deleteSuplier } = require('../controllers/suplier.controllers')

const route = express.Router()

route.get('/', getSupliers)
route.get('/:id', getSuplierById)
route.post('/', createSuplier)
route.put('/:id', updateSuplier),
route.delete('/:id', deleteSuplier)

module.exports = route;