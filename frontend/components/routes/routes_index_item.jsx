import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const RoutesIndexItem = ({route, deleteRoute, session}) => {
  return (
    <div className="routeIdxItem"> 
      {console.log('indexit-----------------',route)}
      <div className="routeIdxItemImage">
        {/* <img src={route.image}/>  */}
        <Link to={`/routes/${route.id}`}>
          <img className="routeIndexImage" 
          src='https://www.mamilian.bike/wp-content/uploads/2020/07/strava-routes.png'/> 
        </Link>
        <div className="dropdownRt" >
          <button className="dropbtnRt"> <i className="fas fa-wrench"></i></button>
          <div className="dropdown_contentRt">
            <a onClick={() => {deleteRoute(route.id)}}>Delete Route</a>
            <Link to={`/routes/${route.id}/edit`}>Edit Route</Link>  
          </div>
        </div>
      </div>
      <Link to={`/routes/${route.id}`} className="rtIdxTitle">{route.title}</Link><br/>
      <div className="rtIdxDistanceGroup">
        <h1 className="rtIdxDistanceNum">{route.distance || 0}</h1> 
        <h1 className="rtIdxDistanceMi">mi</h1>
      </div> 
      <h1 className="rtIdxDistance">Distance</h1>
    </div>
  )
}

export default  RoutesIndexItem;