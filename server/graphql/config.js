'use strict'

const { buildSchema } = require('graphql')

const sampleSchema = `
  type Query {
    message: String
  }
`
const rootResolver = {
  message: () => 'Hello World!'
}

const schema = buildSchema(sampleSchema)

const config = {
  schema,
  rootValue: rootResolver,
  graphiql: true
}

module.exports = config