class Route < ApplicationRecord
validates :title, presence: true
validates :description, presence: true
validates :start_long, presence: true
validates :start_lat, presence: true
validates :end_long, presence: true
validates :end_lat, presence: true

belongs_to :user

has_many :workouts


end