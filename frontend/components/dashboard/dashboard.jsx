import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'
import Profile from './profile';

class Dashboard extends React.Component{ 
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchWorkouts(this.props.session.id)
    this.props.fetchRoutes(this.props.session.id)
  }

  render(){
    return(
      <div className="main_dash">
        <MainNavContainer/>
        <br/>
        <div className="dash_profile">
          <Profile routeCount={this.props.routeCount} workoutCount={this.props.workoutCount}/>
          <p>Workout Feed</p>
        </div>
      </div>
    )
  }
}

export default Dashboard;
 