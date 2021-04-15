import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const MainNav = ({logout}) => {

  return (
    <div className="main_nav_head"> 
      <div className="nav-left">
        <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
        <div className="dropdown" id="dashboardDropdown">
          <button className="dropbtn">Dashboard  <i class="fa fa-chevron-down" aria-hidden="true"> </i></button>
          <div className="dropdown_content">
            <Link to="/dashboard">Activity Feed</Link>
            <Link to="/workouts">My Workouts</Link>
            <Link to="/routes">My Routes</Link>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <div className="dropdown" >
          <button className="dropbtn"><i id="navUser"class="far fa-user-circle"></i> <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
          <div className="dropdown_content" id="logOut_dropdown">
            <a onClick={logout}>Log Out</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><i id="navCross"className="fas fa-plus-circle"></i></button>
          <div className="dropdown_content" id="create_dropdown">
            <Link to='/new/routes'> <i className="fas fa-angle-up"></i>  Create Route</Link>
            <Link to='/new/workouts'><i className="fas fa-arrow-circle-up"></i>  Create Workout</Link>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default MainNav;


// const add5 = name => {
//   return differentFunction()
// }

// const differentFunction = (name) => { // component
//   console.log('Hey im different')
// }