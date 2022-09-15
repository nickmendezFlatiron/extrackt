class Sample < ApplicationRecord
  belongs_to :collection
  has_one_attached :audio_file , dependent: :destroy
  has_many :downloads , dependent: :destroy
end
