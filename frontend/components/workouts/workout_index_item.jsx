import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const WorkoutIndexItem = ({workout}) => {

  return (
    <div> 
    <Link to={`/workouts/${workout.id}`}>{workout.title}</Link>
    <h1>{workout.description}</h1>
    </div>
  )
}

export default  WorkoutIndexItem;