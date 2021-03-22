import React from 'react'
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
      return <WorkoutIndexItem workout={workout}/>
    }) :null 
  
  return (
    <div>
      <MainNavContainer/>
      <h1>Your Workouts</h1>
      <div className="workoutIndexHeader">
      <h1>Title</h1>
      <h1>Description</h1>
      <h1>Date</h1>
      </div>
      {workoutList}
    </div>
  )
  }
}

export default WorkoutIndex;


