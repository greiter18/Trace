import {connect} from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/routes_action';
import WorkoutForm from './workout_form'

const mstp = (store, ownProps) => {
  return {
    workout: {title: '', description: '', date: '',
    hours: '', minutes: '', seconds: '', 
    run_type: 'run', route_id:' ', disabled: true},
    routes: Object.values(store.entities.routes),
    session: store.session,
    history: ownProps.history,
    currentUser: store.session.id
  };
};

const mdtp = dispatch => {
  return {
    action: (workout, currentUser) => dispatch(createWorkout(workout,currentUser)),
    fetchRoutes: id => dispatch(fetchRoutes(id))
  }
}

export default connect(mstp,mdtp)(WorkoutForm);