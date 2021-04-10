class Api::WorkoutsController < ApplicationController

 def index
    @workouts = User.find(params[:user_id]).workouts
    render :index
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def destroy
    @workout = Workout.find_by(id: params[:id])
    if @workout.destroy
      render json: {}
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def update
    @workout = Workout.find(params[:id])
    if @workout.update(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def workout_params
    params.require(:workout).permit(
      :title,
      :description,
      :date,
      :hours,
      :minutes,
      :seconds,
      :run_type,
      :route_id
    )
  end
end
