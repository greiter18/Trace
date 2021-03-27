import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const WorkoutIndexItem = ({workout, deleteWorkout}) => {

  return (
    <div className="workoutList"> 
      <table >
        <tr className="workoutIndexHeader">
          <th>Date</th>
          <th>Title</th>
          <th>Time</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>{workout.date}</td>
          <td><Link to={`/workouts/${workout.id}`}>{workout.title}</Link></td>
          <td>{workout.time}</td>
          <td><Link to={`/workouts/${workout.id}/edit`}>Edit</Link></td>
          <td onClick={()=> deleteWorkout(workout.id)}>Delete</td>
        </tr>
      </table>
    </div>
  )
}

export default  WorkoutIndexItem;