import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const RouteNav = (props) => {

  return (
    <div className="route_nav_head"> 
      <div className="nav-routes-left">
        <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
        <h1 className="nav-routes-left-route">Routes</h1>
      </div>
      <div className="nav-routes-right">
      <Link to="/routes">Back to My Routes</Link>
      </div>
    </div>
  )
}

export default RouteNav;
