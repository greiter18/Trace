import {connect} from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import RouteForm from './workout_create'

const mstp = (store) => {
  return {
    route :{title:'',description:'',date:'',time:'', run_type:''}
  };
};

const mdtp = dispatch => {
  return {
    createRoute: route => dispatch(createRoute(route))
  }
}

export default connect(mstp,mdtp)(RouteForm);