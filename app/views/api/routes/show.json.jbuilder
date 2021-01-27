json.workouts do 
   json.set! @workout.id do
    json.extract! @workout, :title, :description, :date, :run_type, :route_id, :time
   end
end
