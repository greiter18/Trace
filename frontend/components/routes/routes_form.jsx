import React from 'react'

import Maps from './map'

const RouteForm = ({session, action, history}) => {
  return (
    <div>
      <br/>
      <div className="routeFormTop">
      </div>
      {console.log('routeform-------',session)}
      <Maps session={session} action={action} history={history} /> 
      <br/>
    </div>
  )
}

export default RouteForm;