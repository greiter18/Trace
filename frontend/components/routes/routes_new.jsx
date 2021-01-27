import React from 'react'
import MainNavContainer from '../mainNav/main_nav_container'
import { Link, withRouter } from 'react-router-dom';

const RouteNew = () => {
  return (
    <div>
      <Link to="/">Some Header</Link> 
      <br/>
      <h1>Create a New Route</h1>
      <br />
    </div>
  )
}

export default RouteNew;