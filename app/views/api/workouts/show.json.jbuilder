json.set! @workout.id do
  json.extract! @workout,:id, :title, :description, :date, :run_type, :route_id, :time
end


