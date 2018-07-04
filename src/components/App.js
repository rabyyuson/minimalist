'use strict'

import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Header from './Header'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Routes />
      </div>
    )
  }
}

export default hot(module)(App)