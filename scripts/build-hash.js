'use strict'

const fs = require('fs')
const path = require('path')

const build = require('../config/build.json')

// Get the webpack generated hash and save it
fs.writeFileSync(path.resolve(__dirname, '../config/hash.json'), `"${build.hash}"`)