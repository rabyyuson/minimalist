'use strict'

import React from 'react'
import { Link } from 'react-router'
import Header from './Header'

import './AppContainer.scss'

const AppContainer = (props) => {
  return (
    <div className="AppContainer">
      <Header />
      {props.children}
    </div>
  )
}

export default AppContainer