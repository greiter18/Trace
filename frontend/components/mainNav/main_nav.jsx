import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const MainNav = ({logout}) => {



  return (
    <div> 
      <header className="main_nav_head">
        <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
        <ul>
          <li>Activities <i class="fas fa-chevron-down"></i></li>
          <li><Link to="/workouts">My Workouts</Link></li>
          <li><Link to="/routes">My Routes</Link></li>
        </ul>
        <span className="nav_bell"><i className="fas fa-bell"></i></span>
        <span className="nav_bell"><i className="far fa-bell"></i></span>
        <button className="nav_logout" onClick={logout}>Log Out</button>
        <span className="dash_plus_icon"><i className="fas fa-plus-circle"></i></span> 
        <ul>
          <li><Link to="/routes/new">Create Route</Link></li>
          <li><Link to="">Create Workout</Link></li>
        </ul>
      </header>
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