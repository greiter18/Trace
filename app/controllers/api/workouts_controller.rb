class Api::WorkoutsController < ApplicationController

  def index
    @workout = Workout.all
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
      :type,
      :route_id
    )
  end
end
