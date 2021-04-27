import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import MainNavContainer from '../mainNav/main_nav_container'
import Profile from './profile';
import Feed from './feed'
import MainFooter from '../footer/main_footer'

class Dashboard extends React.Component{ 
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchWorkouts(this.props?.session.id)
    this.props.fetchRoutes(this.props?.session.id)
  }

  render(){
      const workoutList = this.props.workouts !== undefined ? this.props.workouts.map(workout => {
        return <li className="feed"><Feed workout={workout} email={this.props.email} route={this.props.route}/></li>
      }) :null 

      // const keys = this.props.workouts.map((workout) => {
      //   return workout.id
      // })
      // let top = Math.max.apply(Math, keys)
      // let workouts = this.props.workouts
      // let latestWorkout = () =>  {
      //   for (i = 0; i < workouts.length; i++){
      //     console.log('---------workouts',workouts)
      //     let workout = workouts[i]
      //     if(workout.id === top){
      //       return workout
      //       }
      //     }
      //   }
    return(
      <div className="main_dash">
        <MainNavContainer/>
        <br/>
        <div className="dash_profile">
          <div className="dash_profile_body">
            <Profile routeCount={this.props.routeCount} workoutCount={this.props.workoutCount} email={this.props.email}/>
          </div>
          <div className="activityFeed">
            <p id="workoutfeed">Your Activities <i class="fas fa-chevron-down"></i></p>
            <ul>{workoutList} </ul>
          </div>
          <div id="dashExtras">
            <h1 className="dashExtrasTitle">
              Challenges
            </h1>
            <p className="dashExtrasBody">
              Join a run or cycling Challenge to stay on top of your game, 
              earn new achievements and see how you stack up.
            </p>
            <h1 className="dashExtrasTitle">
              Clubs
            </h1>
            <p className="dashExtrasBody">
              Why do it alone? Get more out of your 
              Trace experience by joining or creating a Club.
            </p>
            <h1 className="dashExtrasTitle">
              Try a Privacy Zone
            </h1>
            <p className="dashExtrasBody">
              You can hide the location of your home, 
              office or other private places in your activities.
            </p>
          </div>
        </div>
        <MainFooter/>
      </div>
    )
  }
}

export default Dashboard;
 