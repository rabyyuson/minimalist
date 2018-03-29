'use strict'

const config = require('./config/config.json')
const debug = require('debug')('app')
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

server.listen(config.port)
server.on('listening', () => {
  const address = server.address()
  debug(`Express server listening on port ${address.port}`)
})

app.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = app