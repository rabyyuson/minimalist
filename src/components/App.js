'use strict'

import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../../config/relay/environment'

import Header from './Header'
import Routes from './Routes'
import TodoApp from './Todo/TodoApp'

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            viewer {
              ...TodoApp_viewer
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return (
              <div>
                <Header />
                <hr />
                <Routes />
                <TodoApp viewer={props.viewer} />
              </div>
            )
          } else {
            return <div>Loading...</div>;
          }
        }}
      ></QueryRenderer>
    )
  }
}

export default hot(module)(App)