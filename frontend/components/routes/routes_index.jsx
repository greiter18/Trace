import React from 'react'
import MainNavContainer from '../mainNav/main_nav_container'
import RoutesIndexItem from './routes_index_item'

const RoutesIndex = (props) => {
  const routesList = this.routes !== undefined ?  this.routes.map(route => {
    return <RoutesIndexItem routes={route} />
  }) : null

  return (
    <div>
      <MainNavContainer />
      <h1>Routes Index Page</h1>
      {routesList}
    </div>
  )
}

export default RoutesIndex;
