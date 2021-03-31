import React from 'react'
import RouteNav from './routes_nav'
import { Link, withRouter } from 'react-router-dom';
import Maps from './map'

const RouteForm = ({session, createRoute}) => {
  return (
    <div>
      <RouteNav/>
      <br/>
      <div className="routeFormTop">
      </div>
      {console.log('routeform-------',session)}
      <Maps session={session} createRoute={createRoute}/> 
      <br />
    </div>
  )
}

export default RouteForm;