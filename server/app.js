const express = require('express')
const path = require('path')
const server = require('./server')

const app = express()

app.use("/dist", express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, '../public')))
app.use(server)

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

module.exports = app