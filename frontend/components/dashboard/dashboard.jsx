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
      const workoutList = this.props.workouts !== undefined ? this.props.workouts.map(workout => {
        return <li>{workout.title}</li>
      }) :null 
    return(
      <div className="main_dash">
        <MainNavContainer/>
        <br/>
        <div className="dash_profile">
          <Profile routeCount={this.props.routeCount} workoutCount={this.props.workoutCount} email={this.props.email}/>
          <div className="activityFeed">
            <p>Workout Feed</p>
            <ul className="workoutFeedList">{workoutList || 'You have no Workouts'} </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
 