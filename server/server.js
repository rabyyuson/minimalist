'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/components/App'
import hash from '../hash.json'

function server(request, response, next) {
  const html = renderToString(App)
  const title = "Minimalist"

  response.render('index', {
    hash,
    html,
    title
  })
}

export default server