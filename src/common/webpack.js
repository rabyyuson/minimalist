'use strict'

import webpackDevelopmentConfig from '../../webpack.development.config'
import webpackProductionConfig from '../../webpack.production.config'

const config = {
  'development': webpackDevelopmentConfig,
  'production': webpackProductionConfig
}

const { NODE_ENV } = process.env

export default config[NODE_ENV]