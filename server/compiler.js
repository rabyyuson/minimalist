'use strict'

import webpack from 'webpack'
import webpackDevelopmentConfig from '../config/webpack.development.config'

const compiler = webpack(webpackDevelopmentConfig)

export default compiler