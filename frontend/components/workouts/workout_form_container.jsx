import {connect} from 'react-redux';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/routes_action';
import WorkoutForm from './workout_form'

const mstp = (store, ownProps) => {
  return {
    workout: {title: '', description: '', date: '',hours: 0, minutes: 0, seconds: 0, run_type: 'run', route_id:' '},
    routes: Object.values(store.entities.routes),
    session: store.session,
    history: ownProps.history,
    currentUser: store.entities.users.id
  };
};

const mdtp = dispatch => {
  return {
    createWorkout: workout => dispatch(createWorkout(workout)),
    fetchRoutes: id => dispatch(fetchRoutes(id))
  }
}

export default connect(mstp,mdtp)(WorkoutForm);