index
json.workouts do
  @workouts.each do |workout|
    json.set! workout.id do
    json.extract! workout, :title, 
  end
end