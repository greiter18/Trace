import {connect} from 'react-redux';
import { fetchWorkout } from '../../actions/workout_actions';
import EditWorkout from './workout_edit_form'

const mstp = (store, ownProps) => {
  const workoutId = ownProps.match.params.workoutId
  return {
    id: ownProps.match.params.workoutId,
    workout: store.entities.workouts[workoutId],
    formType: "Edit Route",
    routes: Object.values(store.entities.routes),
    session: store.session,
    history: ownProps.history,
    currentUser: store.entities.users.id
  }
}

const mdtp = dispatch => {
  return ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    update: workoutId => dispatch(updateWorkout(workoutId)),
    fetchRoutes: id => dispatch(fetchRoutes(id))
  })
}

export default connect(mstp, mdtp)(EditWorkout)