class ChangeWorkout < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :time
    add_column :workouts, :time, :float, null: false
  end
end
