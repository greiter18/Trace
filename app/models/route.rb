class Route < ApplicationRecord
validates :title, presence: true
validates :start_long, presence: true
validates :start_lat, presence: true
validates :end_long, presence: true
validates :end_lat, presence: true
# validates :description, presence: true 
# validates :image, presence: true
# validates :distance, presence: true

belongs_to :user,
    foreign_key: :user_id

has_many :workouts,
  foreign_key: :route_id
end