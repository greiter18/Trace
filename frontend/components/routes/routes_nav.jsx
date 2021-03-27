import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const RouteNav = (props) => {

  return (
    <div className="main_nav_head"> 
      <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
      Routes
      <Link to="/routes">Back to My Routes</Link>
    </div>
  )
}

export default RouteNav;
