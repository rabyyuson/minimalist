'use strict'

import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import AppContainer from './AppContainer'
import Header from './Header'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Routes />
      </AppContainer>
    )
  }
}

export default hot(module)(App)