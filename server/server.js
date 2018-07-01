'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/components/App'

function server(request, response, next) {
  const html = renderToString(App)

  response.render('index', {
    html
  })
}

export default server