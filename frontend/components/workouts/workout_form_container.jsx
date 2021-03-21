import {connect} from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import WorkoutForm from './workout_form'

const mstp = (store) => {
  return {
    workout: {title:'',description:'',date:'',time:'', run_type:''}
  };
};

const mdtp = dispatch => {
  return {
    createWorkout: workout => dispatch(createWorkout(workout))
  }
}

export default connect(mstp,mdtp)(WorkoutForm);