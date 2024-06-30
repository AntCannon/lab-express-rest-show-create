const express = require('express')
const app = express()

// controllers
const logsController = require('./controllers/logsController')

// health check
app.get('/', (req, res) => {
  res.send(`Welcome to the Captain's log`)
})

// routes
app.use('/logs', logsController)

module.exports = app