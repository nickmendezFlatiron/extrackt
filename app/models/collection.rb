class Collection < ApplicationRecord
  belongs_to :user
  has_one_attached :cover_art , dependent: :destroy
  has_many :samples , dependent: :destroy
end
