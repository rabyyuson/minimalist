'use strict'

import express from 'express'
import expressGraphQl from 'express-graphql'
import expressReactViews from 'express-react-views'
import path from 'path'

import server from './server'
import graphqlConfig from './graphql/config'

const app = express()

// Serve static files from the "public" folder
app.use(express.static('public'))

// Mount the server middleware on every request to the app
app.use(server)

// Set the directory for the application views
app.set('views', path.resolve(__dirname, 'views'))

// Use the Express React Views template engine
app.set('view engine', 'jsx')

// Register the template engine callback
app.engine('jsx', expressReactViews.createEngine())

app.get('*', function(request, response) {
  response.render('index', {
    title: 'Minimalist'
  })
})

// Create a GraphQL server
app.use('/graphql', expressGraphQl(graphqlConfig))

export default app