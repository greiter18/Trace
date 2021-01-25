import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const MainNav = ({logout}) => {
  return (
    <div className='mainNav'> 
      <header className="main_nav_head">
        <Link className='nav_session_logo' to="/dashboard"> TRACE </Link>
        <ul>
          <li><Link to="">My Workouts</Link></li>
          <li><Link to="">My Routes</Link></li>
        </ul>
        
        <button className="nav_logout" onClick={logout}>Log Out</button>
        <ul>
          <li><Link to="">Create Route</Link></li>
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