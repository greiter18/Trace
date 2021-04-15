import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {

  return(
    <div className="main_profile">
      <i id="profileUser"className="fas fa-user-circle"></i>
      <body id="profileBody">
        <h1 className="profile_email">{props.email}</h1>
        <br/>
        <div className="profile_totals">
          <div className='total_activities'>
            <p className="profile_category">Workouts</p>
            <Link to='/workouts' className="total_number">{props.workoutCount || 0}</Link>
          </div>
          <div className='total_routes'>
            <p className="profile_category">Routes</p>
            <Link to='/routes' className="total_number">{props.routeCount || 0 }</Link>
          </div>
        </div>
      </body>
    </div>
  )
};

export default Profile;