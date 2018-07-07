'use strict'

import express from 'express'
import expressReactViews from 'express-react-views'
import graphqlHTTP from 'express-graphql'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import compiler from './compiler'
import reactRouterMiddleware from './react-router-middleware'
import graphqlConfig from '../config/graphql/config'

// Create an express app
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

// Create a GraphQL HTTP server
app.use('/graphql', graphqlHTTP(graphqlConfig))

// Handle requests to the app through the react-router-middleware
app.use(reactRouterMiddleware)

export default app