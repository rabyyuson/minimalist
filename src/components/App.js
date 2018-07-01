'use strict'

import React, { Component } from 'react'

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

export default App