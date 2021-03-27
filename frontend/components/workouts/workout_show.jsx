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
    return(
      <div>
        <MainNav/>
        <h1>Title: {this.props.workout.title}</h1>
        <h1>Description: {this.props.workout.description}</h1>
        <h1>Date: {this.props.workout.date}</h1>
        <h1>Time: {this.props.workout.time}</h1>
        <h1>Type: {this.props.workout.run_type}</h1>
        <Link to={`/workouts/${this.props.workout.id}/edit`}>Edit Workout</Link>
        <br/>
        <button onClick={() => deleteWorkout(this.props.workout.id)}>Delete Workout</button>
      </div>
    )
  }
}

export default WorkoutShow