class Api::RoutesController < ApplicationController

  def create
    @route = Route.new(route_params)
    if @route.save
    render :index
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def show
    @route = Route.find_by(id: params[:id])
  end

  def destroy
    @route = Route.find_by(id: params[:id])
    if @route.destroy
      render :index
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = User.find(params[:user_id]).routes #Route.where(user_id: params[:user_id])
    render :index
  end

  def update
    @route = Route.find(params[:id])
    if @route.update(post_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def route_params
    params.require(:route).permit(
      :title,
      :start_long,
      :start_lat,
      :end_lat,
      :end_long,
      :user_id,
      :description,
      :image,
      :distance
    )
  end
end
