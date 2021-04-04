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
    const {workout} = this.props;
    return(
      <div>
        <MainNav/>
        <h1>Title: {workout.title}</h1>
        <h1>Description: {workout.description}</h1>
        <h1>Date: {workout.date}</h1>
        <h1>Time: {workout.time}</h1>
        <h1>Type: {workout.run_type}</h1>
        <Link to={`/workouts/${workout.id}/edit`}>Edit Workout</Link>
        <br/>
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </div>
    )
  }
}

export default WorkoutShow