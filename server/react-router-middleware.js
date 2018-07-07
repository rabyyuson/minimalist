'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import hash from '../config/hash.json'
import App from '../src/components/App'

function reactRouterMiddleware(request, response, next) {
  const context = {}
  const html = renderToString(
    <StaticRouter location={request.url} context={context}>
      <App/>
    </StaticRouter>
  )
  const title = "Minimalist"

  response.render('main', {
    hash,
    html,
    title
  })
}

export default reactRouterMiddleware