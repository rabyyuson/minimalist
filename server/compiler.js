'use strict'

import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../src/common/webpack'

import config from '../config.json'
import build from '../build.json'

const compiler = webpack(webpackConfig)

// Get the webpack generated hash and save it
fs.writeFileSync(path.resolve(__dirname, '../hash.json'), `"${build.hash}"`)

export default compiler