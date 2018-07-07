'use strict'

import server from './server/server'
import config from './config/config.json'

const debug = require('debug')('app')

server.listen(config.port, function() {
  debug(`Express server listening on port ${config.port}`)
})