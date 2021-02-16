class Api::WorkoutsController < ApplicationController

 def index
    @workouts = Workout.where(user_id: params[:user_id])
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    @workout = Workout.create(workout_params)
  end

  def workout_params
    params.require(:workout).permit(
      :title,
      :description,
      :date,
      :time,
      :run_type,
      :route_id
    )
  end
end
