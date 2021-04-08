import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class WorkoutIndexItem extends React.Component { 
  constructor(props){
    super(props)
  }

  render(){
    let {workout,deleteWorkout}  = this.props;

    let newHour = workout.hours < 10 ? 
    `0${workout.hours}` : workout.hours

    let newMin = workout.hours < 10 ? 
    `0${workout.minutes}` : workout.minutes

    let newSec = workout.hours < 10 ? 
    `0${workout.seconds}`: workout.seconds
    return (
      <div className="workoutList"> 
        <table>
          <tr className="workoutIndexHeader">
            <th>Sport</th>
            <th>Date</th>
            <th>Title</th>
            <th>Time</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>{workout.run_type}</td>
            <td>{workout.date}</td>
            <td className="workoutIdxLinks"><Link to={`/workouts/${workout.id}`}>{workout.title}</Link></td>
            <td>{newHour}:{newMin}:{newSec}</td>
            {/* <td>{newHour}:{workout.minutes}:{workout.seconds}</td> */}
            {/* <td>0{workout.hours}:{workout.minutes}:{workout.seconds}</td> */}
            <td className="workoutIdxLinks"><Link to={`/workouts/${workout.id}/edit`}>Edit</Link></td>
            <td className="workoutIdxLinks" onClick={()=> deleteWorkout(workout.id)}>Delete</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default  WorkoutIndexItem;