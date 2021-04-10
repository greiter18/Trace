export const createWorkout = (workout, currentUser) => {
 return $.ajax({
    method: "POST",
    url: `/api/users/${currentUser}/workouts`,
    data: {workout}
  })
};


export const updateWorkout = (workout)=> {
  return $.ajax({
    method: "PATCH",
    url: `/api/workouts/${workout.id}`,
    data: { workout }
  })
};

export const fetchWorkout = id => (
 $.ajax({
    method: "Get",
    url: `/api/workouts/${id}`,
  })
);

export const fetchWorkouts = (id) => (
 $.ajax({
    method: "Get",
    url: `/api/users/${id}/workouts`,
  })
);

export const deleteWorkout = (workoutId) => {
  debugger
 return $.ajax({
    method: "DELETE",
    url: `/api/workouts/${workoutId}`,
  })
};
