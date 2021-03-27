import React from 'react'
import { deleteWorkout } from '../../util/workout_api_util'
import MainNavContainer from '../mainNav/main_nav_container'
import WorkoutIndexItem from './workout_index_item'

class WorkoutIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchWorkouts(this.props.session.id)
  }

  render(){
    const workoutList = this.props.workouts !== undefined ? this.props.workouts.map(workout => {
      return <WorkoutIndexItem workout={workout} delete={deleteWorkout}/>
    }) :null 
  
  return (
    <div>
      <MainNavContainer/>
      <h1>My Workouts</h1>
      <h1>{this.props.workoutCount} Workout</h1>
      {/* <div className="workoutIndexHeader">
        <h1>Date</h1>
        <h1>Title</h1>
        <h1>Time</h1>
      </div> */}
      {workoutList}
    </div>
  )
  }
}

export default WorkoutIndex;


