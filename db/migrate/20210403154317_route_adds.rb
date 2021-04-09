class RouteAdds < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :image, :text
    add_column :routes, :description, :text
    add_column :routes, :distance, :integer
    remove_column :workouts, :description
    add_column :workouts, :description, :text
  end
end
