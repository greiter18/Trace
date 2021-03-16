import React from 'react'
import RouteNav from '../routes/routes_nav'
import { Link, withRouter } from 'react-router-dom';

const RouteNew = () => {
  return (
    <div>
      <RouteNav/>
      <br/>
      <h1>Create a New Route</h1>
      <br />
    </div>
  )
}

export default RouteNew;