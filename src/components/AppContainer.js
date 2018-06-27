'use strict'

import React from 'react'
import { Link } from 'react-router'
import Header from './Header'

const AppContainer = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default AppContainer