import {connect} from 'react-redux';
import { fetchWorkout } from '../../actions/workout_actions';
import EditWorkout from './workout_edit_form'

const mstp = (store, ownProps) => {
  const workoutId = ownProps.match.params.workoutId
  return {
    workout: store.entities.workouts[workoutId]
  }
}

const mdtp = dispatch => {
  return ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    update: workoutId => dispatch(updateWorkout(workoutId))
  })
}

export default connect(mstp, mdtp)(EditWorkout)