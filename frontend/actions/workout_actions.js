import * as WorkoutApiUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = 'RECEIVE_CURRENT_WORKOUT';
export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const CLEAR_WORKOUTS = 'CLEAR_WORKOUTS';


export const receiveWorkout = workout => {
  return {
    type: RECEIVE_WORKOUT,
    workout
  }
}

export const receiveWorkouts = workouts => {
  return {
    type: RECEIVE_ALL_WORKOUTS,
    workouts
  }
}

export const removeWorkout = workoutId => {
  return {
    type: REMOVE_WORKOUT,
    workoutId
  }
}

export const clearWorkouts = () => {
	return {
		type: CLEAR_WORKOUTS,
	};
};


export const fetchWorkout = (workoutId) => {
  return dispatch => {
    return WorkoutApiUtil.fetchWorkout(workoutId)
      .then(workout => {
        dispatch(receiveWorkout(workout))
      })
  }
}
export const fetchWorkouts = (user_id) => {
  return dispatch => {
    return WorkoutApiUtil.fetchWorkouts(user_id)
      .then(workouts => {
        dispatch(receiveWorkouts(workouts))
      })
  }
}

export const createWorkout = (workout) => {
  return dispatch => {
    return WorkoutApiUtil.createWorkout(workout)
      .then(newWorkout => {
        dispatch(receiveWorkout(newWorkout))
      })
  }
}

export const updateWorkout = (workout) => {
  // debugger
  return dispatch => {
    return WorkoutApiUtil.updateWorkout(workout)
      .then(upWorkout => {
        // debugger
        dispatch(receiveWorkout(upWorkout))
      })
  }
}
export const deleteWorkout = (workoutId) => {
  return dispatch => {
    // debugger
    return WorkoutApiUtil.deleteWorkout(workoutId)
      .then(() => {
        // debugger
        dispatch(removeWorkout(workoutId))
      })
  }
}