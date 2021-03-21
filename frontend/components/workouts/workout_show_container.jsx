import {connect} from 'react-redux';
import { fetchWorkout } from '../../actions/workout_actions';
import { deleteWorkout } from '../../util/workout_api_util';
import WorkoutShow from './workout_show'

const mstp = (store, ownProps) => {
  console.log('ownprops-----------',ownProps)
  console.log('store-----------',store)
  const workoutId = ownProps.match.params.workoutId
  return {
    workout: store.entities.workouts[workoutId] || {}
  }
}

const mdtp = dispatch => {
  return ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
  })
}

export default connect(mstp, mdtp)(WorkoutShow)