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
        <div>
          <h1>{route.email} - {workout.run_type} </h1>
        </div>
        <div className="workShowMain">
          <div className="workShowMainLeft">
            <i class="fas fa-user-circle"></i>
            <div className="workShowMainLeft-inner">
              <h1 id='workShowTitle'> {workout.title}</h1>
              <h1>{workout.description}</h1>
            </div>
          </div>
          <h1>Date: {workout.date}</h1>
          <h1>Moving Time: {workout.hours}:{workout.minutes}:{workout.seconds}</h1>
          <h1>Run Name: {route?.title}</h1>
        </div>
      </div>
    )
  }
}

export default WorkoutShow