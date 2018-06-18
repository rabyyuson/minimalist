'use strict'

const debug = require('debug')('app')
const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
const port = process.env.PORT || 3000

app.use("/dist", express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
debug(`Express server listening on port ${port}`)