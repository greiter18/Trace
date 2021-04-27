@routes.each do |route|
  route.workouts.each do |workout|
    json.set! workout.id do 
     json.extract! workout, :id, :title, :description, :date, :run_type, :route_id, :hours, :minutes, :seconds
    end
  end
end