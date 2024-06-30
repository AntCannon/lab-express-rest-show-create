const express = require('express')
const app = express()

// health check
app.get('/', (req, res) => {
  res.send(`Welcome to the Captain's log`)
})

module.exports = app