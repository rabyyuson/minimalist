'use strict'

const webpackDefaultConfig = require('./webpack.default.config')

const webpackProductionConfig = {
  mode: 'production',
  entry: {
    app: [ './src/index.js' ]
  }
}

module.exports = Object.assign(webpackProductionConfig, webpackDefaultConfig)