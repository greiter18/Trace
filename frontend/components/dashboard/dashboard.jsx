import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'
import Profile from './profile';

const Dashboard = (props) => {
      return(
        <div>
          <MainNavContainer/>
          <br/>
          
          <div className="dash_profile">
            <p>Profile Component</p>
            <Profile />
            <p>Workout Feed</p>
          </div>
        </div>
      )
    }


  export default Dashboard;
 