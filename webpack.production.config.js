'use strict'

const path = require('path')
const webpack = require('webpack')

const config = require('./config.json')

const webpackConfig = {
  mode: 'production',
  entry: {
    app: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react'
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.scss'
    ]
  },
}

module.exports = webpackConfig