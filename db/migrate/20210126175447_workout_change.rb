class WorkoutChange < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :type
    add_column :workouts, :run_type, :string, null: false
  end
end
