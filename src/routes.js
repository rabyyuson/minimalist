const React = require('react')
const ReactRouter = require('react-router')
const Route = React.createFactory(ReactRouter.Route)
const IndexRoute = React.createFactory(ReactRouter.IndexRoute)

import AppContainer from './components/AppContainer'
import About from './components/About'
import Home from './components/Home'

module.exports = Route({},
  Route({ path: '/', component: AppContainer },
    IndexRoute({ component: Home }),
    Route({ path: '/about', component: About })
  )
)