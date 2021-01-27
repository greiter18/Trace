export const createWorkout = workout => (
 $.ajax({
    method: "POST",
    url: "/api/workouts",
    data: {workout}
  })
);


export const updateWorkout = workout => (
  $.ajax({
    method: "PATCH",
    url: `/api/workouts/${workout.id}`,
    data: { workout }
  })
);

export const fetchWorkout = id => (
 $.ajax({
    method: "Get",
    url: `/api/workouts/${id}`,
  })
);

export const fetchWorkouts = () => (
 $.ajax({
    method: "Get",
    url: `/api/workouts/`,
  })
);
export const deleteWorkout = (workoutId) => (
 $.ajax({
    method: "DELTER",
   url: `/api/workouts/${workoutId}`,
  })
);
