const express = require('express')
const { getReports, getReportById, createReport, updateReport, deleteReport } = require('../controllers/reports.controllers')

const route = express.Router()

route.get('/', getReports)
route.get('/:id', getReportById)
route.post('/', createReport)
route.put('/:id', updateReport)
route.delete('/:id', deleteReport)

module.exports = route;