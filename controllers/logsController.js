const express = require('express')
const logsController = express.Router()
let logModel = require('../models/log')

// index
logsController.get('/', (req, res) => {
  res.json(logModel)
})

// show 
logsController.get('/:id', (req, res) => {
  const logId = +req.params.id
  const logById = logModel.find(log => log.id === logId)
  if (logById) {
    res.status(201).json(logById)
  } else {
      res.redirect("*")
  }
})

// create
logsController.post('/', (req, res) => {
  const createdLog = {
    id: logModel.length + 1,
    ...req.body
  }
  logModel.push(createdLog)
  res.status(201).json(createdLog)
})

module.exports = logsController