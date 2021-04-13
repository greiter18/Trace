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
        <div className="routeShowAll" >
          <div className="routeShowTop">
            <div className="routeShowTitle">
            <Link to='/routes/' className="routeShowTitleLink"><h1 >My Running Routes/   </h1></Link> 
            <h1 className="routeShowTitleroute">{route.title}</h1>
            </div> 
            <div className="routeShowHeader">
              <i class="fas fa-star"></i>  
              <h1 className="routeShowHeaderTitle"> {route.title}</h1>
            </div>
            <Link to={`/routes/${route.id}/edit`} ><button className="routesShowEdit">Edit</button></Link>
          </div> 
          <div className="routesShowMain">
            {/* <img className="routeShowMap" src={route.image} /> */}
            <img className="routeShowMap" src='https://www.mamilian.bike/wp-content/uploads/2020/07/strava-routes.png' />
            <div>
              <h1> <i className="icon" id='showUserIcon' className="fas fa-user-circle"></i> By {currentUser.email}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteShow
