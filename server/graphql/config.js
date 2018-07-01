'use strict'

import { buildSchema } from 'graphql'

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

export default config