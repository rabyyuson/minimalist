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
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            "react",
            "es2015"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: [
      "*",
      ".js",
      ".jsx"
    ]
  },
}

module.exports = webpackConfig