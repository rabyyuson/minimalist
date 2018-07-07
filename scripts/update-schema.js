'use strict'

import fs from 'fs'
import path from 'path'
import { schema } from '../config/graphql/schema'
import { printSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../config/graphql/schema.graphql')

fs.writeFileSync(schemaPath, printSchema(schema))

console.log(`Wrote ${schemaPath}`)