class Api::RoutesController < ApplicationController


<<<<<<< HEAD
  # def create
  #   @route = Route.create(route_params)
  #   render :show
    
  # end
=======
  def create
    @route = Route.create(route_params)
    render :show
  end

  def show
    @route = Routes.find_by(id: params[id])
  end
>>>>>>> routes

  # def destroy
  # end

<<<<<<< HEAD
  # def index
  #   @routes = current_user.routes.all
  # end

  
=======
  def index
    @routes = Routes.where(user_id: params[:user_id])
  end
>>>>>>> routes

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
