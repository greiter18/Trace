@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :title, :start_long, :start_lat, :end_lat, :end_long
  end
end