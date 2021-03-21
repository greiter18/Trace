import {connect} from 'react-redux';
import { fetchWorkouts } from '../../actions/workout_actions';
import WorkoutIndex from './workout_index'

const mstp = (store) => {
  console.log('--------------',store)
  return {
    session: store.session,
    workouts: Object.values(store.entities.workouts) 
  };
};

const mdtp = dispatch => {
  return {
    fetchWorkouts: (id) => dispatch(fetchWorkouts(id))
  }
}

export default connect(mstp,mdtp)(WorkoutIndex);