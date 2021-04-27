import {connect} from 'react-redux';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';
import WorkoutIndex from './workout_index'

const mstp = (store) => {
  // console.log('--------------',store)
  return {
    session: store.session,
    workouts: Object.values(store.entities.workouts),
    workoutCount: Object.values(store.entities.workouts).length 
  };
};

const mdtp = dispatch => {
  return {
    fetchWorkouts: (id) => dispatch(fetchWorkouts(id)),
    deleteWorkout: (id) => dispatch(deleteWorkout(id))

  }
}

export default connect(mstp,mdtp)(WorkoutIndex);