class Api::RoutesController < ApplicationController


  def create
    @route = Route.create(route_params)
    render :show
  end

  def show
    @route = Route.find_by(id: params[:id])
  end

  def destroy
  end

  def index
    @routes = Route.where(user_id: params[:user_id])
  end

  def route_params
    params.require(:route).permit(
      :title,
      :start_long,
      :start_lat,
      :end_lat,
      :end_long,
      :user_id
    )
  end
end
