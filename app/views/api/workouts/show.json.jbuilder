json.set! @workout.id do
  json.extract! @workout,:id, :title, :description, :date, :run_type, :route_id, :hours, :minutes, :seconds
    json.route do 
      json.extract! @workout.route, :id, :title, :user_id
      json.extract! @workout.route.user, :id, :email
    end
end


