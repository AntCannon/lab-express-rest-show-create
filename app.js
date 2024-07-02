const express = require('express')
const app = express()

// middleware
app.use(express.json())

// controllers
const logsController = require('./controllers/logsController')

// health check
app.get('/', (req, res) => {
  res.send(`Welcome to the Captain's log`)
})

// routes
app.use('/logs', logsController)

// 404
app.use('*', (req, res) => {
  res.status(404).json({error: 'No page found'})
})

module.exports = app