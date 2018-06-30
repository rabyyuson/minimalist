'use strict'

const path = require('path')
const webpack = require('webpack')

const config = require('./config.json')

const webpackConfig = {
  mode: 'development',
  entry: {
    app: [ './src/index.js' ]
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
        use: [
          {
            loader: 'babel-loader',
            options: { presets: [ 'env', 'react' ] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.scss' ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    hot: true,
    index: './public/index.html',
    inline: true,
    overlay: true,
    port: config.port,
    progress: true,
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackConfig