'use strict'

import express from 'express'
import expressGraphQl from 'express-graphql'
import expressReactViews from 'express-react-views'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import compiler from './compiler'
import server from './server'
import graphqlConfig from './graphql/config'

const app = express()

// Emit files processed by webpack
app.use(webpackDevMiddleware(compiler))

// Webpack hot reloading using webpack-dev-middleware
app.use(webpackHotMiddleware(compiler))

// Serve static files from the "public" folder
app.use(express.static('public'))

// Set the directory for the application views
app.set('views', path.resolve(__dirname, 'views'))

// Use the Express React Views template engine
app.set('view engine', 'jsx')

// Register the template engine callback
app.engine('jsx', expressReactViews.createEngine())

// Create a GraphQL server
app.use('/graphql', expressGraphQl(graphqlConfig))

// Mount the server middleware on every request to the app
app.use(server)

export default app