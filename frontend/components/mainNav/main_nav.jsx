import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const MainNav = ({logout}) => {

  return (
    <div className="main_nav_head"> 
      <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
      <div className="dropdown">
        <button className="dropbtn">My Activities  <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
        <div className="dropdown_content">
          <Link to="/dashboard">Activity Feed</Link>
          <Link to="/workouts">My Workouts</Link>
          <Link to="/routes">My Routes</Link>
        </div>
      </div>
      <div className="dropdown" >
        <button className="dropbtn"><i className="fas fa-user"></i> <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
        <div className="dropdown_content">
          <a href="#" onClick={logout}>Log Out</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn"><i className="fas fa-plus-circle"></i></button>
        <div className="dropdown_content" id="create_dropdown">
          <Link to='/routes/new'>New Route</Link>
          <Link to='/workouts/new'>New Workout</Link>
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