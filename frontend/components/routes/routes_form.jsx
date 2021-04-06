import React from 'react'

import Maps from './map'

const RouteForm = ({session, createRoute}) => {
  return (
    <div>
      <br/>
      <div className="routeFormTop">
      </div>
      {console.log('routeform-------',session)}
      <Maps session={session} createRoute={createRoute} /> 
      <br/>
    </div>
  )
}

export default RouteForm;