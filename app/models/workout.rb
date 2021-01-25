class Workout < ApplicationRecord

  validates :title, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :time, presence: true
  validates :type, presence: true

  belongs_to :route

end