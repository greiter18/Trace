import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const MainNav = ({logout}) => {



  return (
    <div className="main_nav_head"> 
      <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
      {/* <div className="dropbtn">
        <button className="dropdown-content">My Activities</button>
        <div className="dropdown-content">
          <a href="/workouts">My Workouts</a>
          <a href="/routes">My Routes</a>
        </div>
      </div> */}

      <Link></Link>
      <div className="dropdown">
        <button className="dropbtn">My Activities</button>
        <div className="dropdown_content">
          <Link to="/dashboard">Activity Feed</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/routes">Routes</Link>
        </div>
      </div>
      <div className="dropdown" >
        <button className="dropbtn"><i className="fas fa-user"></i></button>
        <div className="dropdown_content">
          <a href="#" onClick={logout}>Log Out</a>

        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn"><i className="fas fa-plus-circle"></i></button>
        <div className="dropdown_content" id="create_dropdown">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
{/* 
      <div className="nav_dropdown">
        <i className="fas fa-user"></i>
        <div className="dropdown-content">
          <button className="nav_logout" onClick={logout}>Log Out</button>
        </div>
      </div>
      <div className="nav_dropdown">
        <i className="fas fa-plus-circle"></i>
        <div className="dropdown-content">
          <a href="/routes/new">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div> */}
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