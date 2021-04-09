import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const WorkoutNav = (props) => {

  return (
    <div className="main_nav_head"> 
      <Link className='nav_main_logo' to="/dashboard"> TRACE </Link>
      <Link to="/workouts">Back to My Workouts</Link>
    </div>
  )
}

export default WorkoutNav;
