import React from 'react';

const Profile = (props) => {

  return(
    <div className="main_profile">
      <h1>{props.email}</h1>
      <br/>
      <div className='total_activities'>
        <br/>
      <ul>
        <li>Total Workouts</li>
        <li>{props.workoutCount || 0}</li>
      </ul>
      </div>
      <div className='total_routes'>
      <ul>
        <li>Total Routes</li>
        <li>{props.routeCount || 0 }</li>
      </ul>
      </div>
    </div>
  )
};

export default Profile;