import React from 'react'
import WorkoutForm from './workout_form'

class EditWorkout extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchWorkout(this.props.match.params.workoutId)
  }

  render(){
    if(!workout) return null
    return(
      <div>
        <WorkoutForm 
        update={update}
        workout={workout}
        />
      </div>

    )
  }
}

export default EditWorkout;