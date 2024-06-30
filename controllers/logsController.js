const express = require('express')
const logsController = express.Router()
const logModel = require('../models/log')

logsController.get('/', (req, res) => {
  res.json(logModel)
})

module.exports = logsController