import {connect} from 'react-redux';
import { fetchWorkout, updateWorkout } from '../../actions/workout_actions';
import WorkoutForm from './workout_form'
import React from 'react'
import { fetchRoutes } from '../../actions/routes_action';


class EditWorkoutForm extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const workoutId = this.props.match.params.workoutId;
		if (!this.props.workout[workoutId]) {
			this.props.fetchWorkout(workoutId);
		}
  }
  render(){
    const { currentUser, workout, formType, action, history, 
       fetchRoutes, session, routes, route } = this.props;
    const workoutId = this.props.match.params?.workoutId;
    // debugger
    return workout[workoutId] ? (
      <div>
        <WorkoutForm workout={workout[workoutId]} formType={formType} action={action} history={history}
         fetchRoutes={fetchRoutes} currentUser={currentUser} session={session }
          routes={routes} route={route} workoutId={workoutId}
        />
      </div>
    ): null;
  }
};

const mstp = (store, ownProps) => {
  return {
    id: ownProps.match.params.workoutId,
    workout: store.entities.workouts,
    route: store.entities.workouts.route,
    formType: "Edit",
    routes: Object.values(store.entities.routes),
    session: store.session,
    history: ownProps.history,
    currentUser: store.entities.users.id
  }
}

const mdtp = dispatch => {
  return ({
    fetchWorkout: workoutId => dispatch(fetchWorkout(workoutId)),
    action: workout => dispatch(updateWorkout(workout)),
    fetchRoutes: id => dispatch(fetchRoutes(id))
  })
}

export default connect(mstp, mdtp)(EditWorkoutForm)