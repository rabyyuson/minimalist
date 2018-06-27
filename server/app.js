'use strict'

const express = require('express')
const express_graphql = require('express-graphql')
const path = require('path')
const server = require('./server')
const graphqlConfig = require('./graphql/config')

const app = express()

app.use("/dist", express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, '../public')))

app.use(server)

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use('/graphql', express_graphql(graphqlConfig))

module.exports = app