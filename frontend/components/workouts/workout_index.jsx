import React from 'react'
import { deleteWorkout } from '../../util/workout_api_util'
import MainNavContainer from '../mainNav/main_nav_container'
import WorkoutIndexItem from './workout_index_item'
import MainFooter from '../footer/main_footer'

class WorkoutIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchWorkouts(this.props.session.id)
  }

  render(){
    const workoutList = this.props.workouts !== undefined ? this.props.workouts.map(workout => {
      return <WorkoutIndexItem workout={workout} deleteWorkout={this.props.deleteWorkout}/> 
    }) :null 

    const workoutOrworkouts = this.props.workoutCount === 1 ?
     `Workout` : 'Workouts'
  
  return (
    <div>
      <MainNavContainer/>
      {console.log('------------count',this.props.workoutCount)}
      <div id="workoutIdxBody">
        <div id="workoutIdxBodyTop">
          <h1 className="workoutIndexTitle">My Workouts</h1>
          <h1 className="workoutCount">{this.props.workoutCount} {workoutOrworkouts}</h1>
        </div>
        <table className="workoutTable">
          <tbody>
            <tr className="workoutIndexHeader">
              <th>Sport</th>
              <th>Date</th>
              <th>Title</th>
              <th>Time</th>
              <th></th>
              <th></th>
            </tr>
            {workoutList}
          </tbody>
        </table>
      </div>
      <MainFooter/>
    </div>
  )
  }
}

export default WorkoutIndex;


