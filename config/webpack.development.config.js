'use strict'

const webpack = require('webpack')

const webpackDefaultConfig = require('./webpack.default.config')

const webpackDevelopmentConfig = {
  mode: 'development',
  entry: {
    app: [
      './src/index.js',
      'webpack-hot-middleware/client'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = Object.assign(webpackDevelopmentConfig, webpackDefaultConfig)