'use strict'

import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>{ this.props.title }</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{ this.props.children }</div>
        <script src={`./assets/bundle.js`}></script>
      </body>
      </html>
    )
  }
}

export default Index