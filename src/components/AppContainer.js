import React from 'react'
import { Link } from 'react-router'

const AppContainer = props => {
  return (
    <div>
      <Link to='/'>Home</Link>
      { ' | ' }
      <Link to='/about'>About</Link>
      {props.children}
    </div>
  )
}

export default AppContainer