class WorkoutChanges < ActiveRecord::Migration[5.2]
  def change
     add_column :workouts, :hours, :integer
     add_column :workouts, :minutes, :integer
     add_column :workouts, :seconds, :integer
     remove_column :workouts, :time
  end
end
