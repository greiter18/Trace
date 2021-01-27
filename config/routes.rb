# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#           api_user_routes GET    /api/users/:user_id/routes(.:format)                                                     api/routes#index {:format=>:json}
#                           POST   /api/users/:user_id/routes(.:format)                                                     api/routes#create {:format=>:json}
#         api_user_workouts GET    /api/users/:user_id/workouts(.:format)                                                   api/workouts#index {:format=>:json}
#                           POST   /api/users/:user_id/workouts(.:format)                                                   api/workouts#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#            edit_api_route GET    /api/routes/:id/edit(.:format)                                                           api/routes#edit {:format=>:json}
#                 api_route GET    /api/routes/:id(.:format)                                                                api/routes#show {:format=>:json}
#                           PATCH  /api/routes/:id(.:format)                                                                api/routes#update {:format=>:json}
#                           PUT    /api/routes/:id(.:format)                                                                api/routes#update {:format=>:json}
#                           DELETE /api/routes/:id(.:format)                                                                api/routes#destroy {:format=>:json}
#          edit_api_workout GET    /api/workouts/:id/edit(.:format)                                                         api/workouts#edit {:format=>:json}
#               api_workout GET    /api/workouts/:id(.:format)                                                              api/workouts#show {:format=>:json}
#                           PATCH  /api/workouts/:id(.:format)                                                              api/workouts#update {:format=>:json}
#                           PUT    /api/workouts/:id(.:format)                                                              api/workouts#update {:format=>:json}
#                           DELETE /api/workouts/:id(.:format)                                                              api/workouts#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :routes, only: [:index, :create]
      resources :workouts, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:destroy, :show, :edit, :update]
    resources :workouts, only:[:destroy, :show, :edit, :update]
  end

  root "static_pages#root"
end
