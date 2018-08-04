'use strict'

import { schema } from './schema'

const { NODE_ENV } = process.env

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

const graphqlConfig = Object.assign({ schema }, options)

export default graphqlConfig