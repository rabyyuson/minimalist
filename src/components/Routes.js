'use strict'

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './About'
import Home from './Home'

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    )
  }
}

export default Routes