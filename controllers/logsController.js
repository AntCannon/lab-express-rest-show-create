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
  res.status(201).json(logModel[logModel.length - 1])
})

// destroy
logsController.delete('/:id', (req, res) => {
  const id = +req.params.id
  const logIndexToDelete = logModel.findIndex(log => log.id === id)
  if (logIndexToDelete > -1) {
    logModel.splice(logIndexToDelete, 1)
    res.status(200).redirect("/logs")
  } else {
    res.json({error: `Log with id: ${id} not found`})
  }
})

module.exports = logsController