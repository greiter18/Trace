class Workout < ApplicationRecord

  validates :title, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :hours, presence: true
  validates :minutes, presence: true
  validates :seconds, presence: true
  validates :run_type, presence: true

  belongs_to :route,
    foreign_key: :route_id

  has_one :user,
  through: :route,
  source: :user

end