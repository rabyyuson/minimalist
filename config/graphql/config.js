'use strict'

// TODO replace with actual schema
import { buildSchema } from 'graphql'

const { NODE_ENV } = process.env

// Construct schema using GraphQL language
const schema = buildSchema(`
  type Query {
    message: String
  }
`)

// The resolver function for each API endpoint
const rootValue = {
  message: () => 'Hello World!'
}

// Graphql options
const options = {
  graphiql: false,
  pretty: false
}

// Set extra options when on development mode
if (NODE_ENV === 'development') {
  // Expose the graphql in-browser IDE
  options.graphiql = true
  // Pretty-print the JSON response
  options.pretty = true
}

const graphqlConfig = Object.assign({
  schema,
  rootValue
}, options)

export default graphqlConfig