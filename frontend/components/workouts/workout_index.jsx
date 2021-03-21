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
      <h1>WorkOut Index Page</h1>
      {workoutList}
    </div>
  )
  }
}

export default WorkoutIndex;


