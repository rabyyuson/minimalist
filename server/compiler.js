'use strict'

import webpack from 'webpack'
import webpackConfig from '../utilities/webpack'

const compiler = webpack(webpackConfig)

export default compiler