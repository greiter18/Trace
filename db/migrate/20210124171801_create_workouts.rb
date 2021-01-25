class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.string :type, null: false 
      t.integer :route_id, null: false 
    end
    add_index :workouts, :route_id
  end
end
