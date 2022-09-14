class Collection < ApplicationRecord
  belongs_to :user
  has_one_attached :cover_art
  has_many :samples
end
