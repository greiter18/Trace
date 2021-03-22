import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const WorkoutIndexItem = ({workout}) => {

  return (
    <div className="workoutList"> 
    <Link to={`/workouts/${workout.id}`}>{workout.date}</Link>
    <Link to={`/workouts/${workout.id}`}>{workout.title}</Link>
    <Link to={`/workouts/${workout.id}`}>{workout.description}</Link>
    <h1>{workout.description}</h1>
    </div>
  )
}

export default  WorkoutIndexItem;