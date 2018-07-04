'use strict'

import app from './server/app'
import config from './config/config.json'

const debug = require('debug')('app')

app.listen(config.port, function() {
  debug(`Express server listening on port ${config.port}`)
})