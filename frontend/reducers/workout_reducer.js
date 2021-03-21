import {
  RECEIVE_WORKOUT,
  RECEIVE_ALL_WORKOUTS,
  REMOVE_WORKOUT
} from '../actions/workout_actions';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_WORKOUT:
      return action.workout
    case RECEIVE_ALL_WORKOUTS:
      return Object.assign({}, state, action.workouts )
    case REMOVE_WORKOUT:
      const newState = Object.assign({},state);
      delete newState [action.workoutId];
      return newState;
    default:
      return state;
  }
}

export default workoutReducer;