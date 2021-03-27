import {connect} from 'react-redux';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/routes_action';
import dashboard from './dashboard';

const mstp = ({session, entities}) => {
  return {
    session: session,
    currentUser: entities.users[session.id],
    email: entities.users[session.id].email,
    workoutCount: Object.values(entities.workouts).length,
    routeCount: Object.values(entities.routes).length,
    workouts: Object.values(entities.workouts)
  };
};

const mdtp = dispatch => {
  return {
    fetchWorkouts: (id) => dispatch(fetchWorkouts(id)),
    fetchRoutes: (id) => dispatch(fetchRoutes(id)),
  }
}

export default connect(mstp,mdtp)(dashboard);