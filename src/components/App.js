'use strict'

import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { graphql, QueryRenderer } from 'react-relay'

import environment from '../../config/relay/environment'

import Header from './Header'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            viewer {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return this.renderApp(props)
          } else {
            return <div>Loading...</div>;
          }
        }}
      ></QueryRenderer>
    )
  }

  renderApp(props) {
    return (
      <div>
        <Header />
        <br/>
        User ID: {props.viewer.id}
        <hr />
        <Routes />
      </div>
    )
  }
}

export default hot(module)(App)