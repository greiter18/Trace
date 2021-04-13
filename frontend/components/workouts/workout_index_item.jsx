import React from 'react'
import { Link, withRouter } from 'react-router-dom';


class WorkoutIndexItem extends React.Component { 
  constructor(props){
    super(props)
    this.cap = this.cap.bind(this)
  }

    cap(s) {
    return s?.charAt(0)?.toUpperCase() + s?.slice(1);
    }
  render(){
    let {workout, deleteWorkout } = this.props;

    let newHour = workout.hours < 10 ? 
      `0${workout.hours}` : workout.hours
    let newMin = workout.minutes < 10 ? 
      `0${workout.minutes}` : workout.minutes
    let newSec = workout.seconds < 10 ? 
      `0${workout.seconds}`: workout.seconds

    return (
      <tr>
        <td>{this.cap(workout.run_type)}</td>
        <td>{workout.date}</td>
        <td className="workoutIdxLinks"><Link to={`/workouts/${workout.id}`}>{this.cap(workout.title)}</Link></td>
        <td>{newHour}:{newMin}:{newSec}</td>
        <td className="workoutIdxLinks"><Link to={`/workouts/${workout.id}/edit`}>Edit</Link></td>
        {console.log('indexitm-------------------',workout.id)} 
        <td className="workoutIdxLinks" onClick={() => deleteWorkout(workout.id)}>Delete</td>
      </tr>
  
    )
  }
}

export default  WorkoutIndexItem;