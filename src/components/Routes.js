'use strict'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import Home from './Home'
import TodoApp from './Todo/TodoApp'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/todo' render={() => <TodoApp viewer={this.props.viewer} />} />
      </div>
    )
  }
}

export default Routes