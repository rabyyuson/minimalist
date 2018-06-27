'use strict'

import React, { Component } from 'react'
import Header from './Header'
import Routes from './Routes'
import AppContainer from './AppContainer'

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