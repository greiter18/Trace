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
    return <RoutesIndexItem route={route} deleteRoute={this.props.deleteRoute} session={this.props.session}/>
  }) : null

    return (
      <div>
        {console.log('component store-------',this.props.routes)}
        <MainNavContainer />
        <div className="routeIndexTop">
          <div className="routeIndexTopLeft">
            <h1 className="routeIndexTitle">My Routes</h1>
            <button className="routeIndexCreate"><Link to="/new/routes">Create New Route</Link></button>
          </div>
          <div>
            <p className='routeIndexFinePrint'>Learn more about sharing & exporting routes to a variety of devices.</p>
          </div>
          <div>
            <img  src="https://d3nn82uaxijpm6.cloudfront.net/assets/routes/route-list-mobile-upsell-c1aec554d010e3c86411ad560615802162318875f086d1e3ed4850d6c7014b8f.png"/>
          </div>
        </div>
        <div className="routeIndexList">
          {routesList}
        </div>
      </div>
    )
  }
}

export default RoutesIndex;
