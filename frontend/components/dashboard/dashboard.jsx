import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'
import Profile from './profile';
import Feed from './feed'

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
        return <li className="feed"><Feed workout={workout}/></li>
      }) :null 
    return(
      <div className="main_dash">
        <MainNavContainer/>
        <br/>
        <div className="dash_profile">
          <Profile routeCount={this.props.routeCount} workoutCount={this.props.workoutCount} email={this.props.email}/>
          <div className="activityFeed">
            <p>Workout Feed</p>
            <ul>{workoutList} </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
 