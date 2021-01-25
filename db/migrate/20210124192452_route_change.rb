class RouteChange < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :description
  end
end
