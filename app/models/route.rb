class Route < ApplicationRecord
validates :title, presence: true
validates :start_long, presence: true
validates :start_lat, presence: true
validates :end_long, presence: true
validates :end_lat, presence: true

belongs_to :user,
<<<<<<< HEAD
  foreign_key :user_id
  primary_key :id,
=======
  foreign_key: :user_id
>>>>>>> routes

has_many :workouts,
  foreign_key: :route_id


end