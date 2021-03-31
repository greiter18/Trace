import React from 'react'
import MainNavContainer from '../mainNav/main_nav_container'
import RoutesIndexItem from './routes_index_item'
import { Link, withRouter } from 'react-router-dom';

class RoutesIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchRoutes(this.props.session.id)
  }

  render(){
  const routesList = this.props.routes !== undefined ?  this.props.routes.map(route => {
    return <RoutesIndexItem route={route} />
  }) : null

    return (
      <div>
        {console.log('coponent store-------',this.props.routes)}
        <MainNavContainer/>
        <h1>My Routes</h1>
        <Link to="/new/routes">Create New Route</Link>
        {routesList}
      </div>
    )
  }
}

export default RoutesIndex;
