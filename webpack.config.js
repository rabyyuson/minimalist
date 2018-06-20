const webpack = require('webpack')
const path = require('path')
const config = require('./config.json')

const webpackConfig = {
  entry: [
    "babel-polyfill",
    "./src/index.js"
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: config.port,
    publicPath: `http://localhost:${config.port}/dist/`,
    hotOnly: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: { extensions: ["*", ".js", ".jsx"] }
}

module.exports = webpackConfig