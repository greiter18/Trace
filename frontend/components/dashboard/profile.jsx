import React from 'react';

const Profile = ({email}) => {
  return(
    <div className="main_profile">
      <h1>{email}</h1>
      <br/>
      <div className='total_activities'>
        
        <br/>
      <ul>
        <li>Total Activities</li>
        <li>10</li>
      </ul>
      </div>
      <div className='total_routes'>
      <ul>
        <li>Total Routes</li>
        <li>18</li>
      </ul>
      </div>
    </div>
  )
};

export default Profile;