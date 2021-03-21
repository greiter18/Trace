import React from 'react'
import { Link } from 'react-router-dom';
import { deleteWorkout } from '../../util/workout_api_util';


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
        <h1>{this.props.workout.title}</h1>
        <h1>{this.props.workout.descriptiom}</h1>
        <h1>{this.props.workout.date}</h1>
        <h1>{this.props.workout.time}</h1>
        <h1>{this.props.workout.run_type}</h1>
        <Link to={`/workouts/${this.props.workout.id}/edit`}>Edit Workout</Link>
        <button onClick={() => deleteWorkout(this.props.workout.id)}>Delete Workout</button>
      </div>
    )
  }
}

export default WorkoutShow