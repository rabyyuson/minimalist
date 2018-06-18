import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import Homepage from './components/Homepage'
import About from './components/About'
import AppContainer from './components/AppContainer'

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Homepage} />
    <Route path='/about' component={About} />
  </Route>
)