import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import MainNav from './../mainNav/main_nav'


class RouteShow extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  if(!this.props.route[this.props.match.params.routeId])
    this.props.fetchRoute(this.props.match.params.routeId)
  }
  render(){
    const {route, currentUser} = this.props;
    return(
      <div>
        <MainNav/>
        <h1 className="routeShowTitle">My Running Routes/{route.title}</h1>
      <h1 className="routeShowHeader">{route.title}</h1>
      <Link to={`/routes/${route.id}/edit`}><button>Edit</button></Link> 
      <div className="routesShowMain">
        <img className="routeShowMap" src={route.image} />
        <div>
          
          <h1> <i className="icon" className="fas fa-user-circle"></i> By {currentUser.email}</h1>
        </div>
      </div>
      </div>
    )
  }
}

export default RouteShow
