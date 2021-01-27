import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'

const Dashboard = (props) => {
      return(
        <div>
          <MainNavContainer/>
          <br/>
          <body className="dash_body">
            <p>Profile Component</p>
            <p>Workout Feed</p>
          </body>
        </div>
      )
    }


  export default Dashboard;
 