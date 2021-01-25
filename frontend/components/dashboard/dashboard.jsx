import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'

const Dashboard = ({logout}) => {
      return(
        <div>
          <MainNavContainer/>
          <h2>Still Here </h2>
          <br/>
          <h2>Still selling fake Doors</h2>
          <button onClick={logout}>Log Out</button>
        </div>
      )
    }


  export default Dashboard
 