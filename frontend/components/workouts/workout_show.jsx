import React from 'react'
import { Link } from 'react-router-dom';
import MainNav from '../mainNav/main_nav'

class WorkoutShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
  if(!this.props.workout[this.props.match.params.workoutId])
    this.props.fetchWorkout(this.props.match.params.workoutId)
  }

  render(){
    const {workout, route, currentUser} = this.props;
    return(
      <div>
        <MainNav/>
        <div id='workoutShow'>
          <body id="workShowBody">
            <div id="workShowhead">
              <h1>{route.email} - {workout.run_type} </h1>
            </div>
            <div className="workShowMain">
              <div className="workShowMainLeft">
                <i id="userWorkShow" class="fas fa-user-circle"></i>
                <div className="workShowMainLeft-inner">
                  <h1 id='workShowTitle'> {workout.title}</h1>
                  <h1>{workout.description}</h1>
                </div>
              </div>
              <div className="workShowitem">
                <h1>{workout.date}</h1>
                <h2>Date</h2>
              </div>
              <div className="workShowitem">
                <h1>{workout.hours}:{workout.minutes}:{workout.seconds}</h1>
                <h2>Moving Time</h2>
              </div>
              <div className="workShowitem">
              <h1>{route?.title}</h1>
              <h2>Run Name</h2>
              </div>
            </div>
          </body>
          <img id="workShowMap" src='https://www.mamilian.bike/wp-content/uploads/2020/07/strava-routes.png' />
        </div> 
      </div>
    )
  }
}

export default WorkoutShow