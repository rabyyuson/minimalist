'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/components/App'

function server(request, response, next) {
  const html = renderToString(App)
  const title = "Minimalist"

  response.render('index', {
    html,
    title
  })
}

export default server