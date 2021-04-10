import React from 'react';

const Profile = (props) => {

  return(
    <div className="main_profile">
      <i className="fas fa-user-circle"></i>
      <h1 className="profile_email">{props.email}</h1>
      <br/>
      <div className="profile_totals">
        <div className='total_activities'>
          <br/>
        <ul>
          <li className="profile_category">Workouts</li>
          <li className="total_number">{props.workoutCount || 0}</li>
        </ul>
        </div>
        <div className='total_routes'>
        <ul>
          <li className="profile_category">Routes</li>
          <li className="total_number">{props.routeCount || 0 }</li>
        </ul>
        </div>
      </div>
      <div>
        <p>Latest Activity</p> 
        <p></p>
      </div>
    </div>
  )
};

export default Profile;