class Sample < ApplicationRecord
  belongs_to :collection
  has_one_attached :audio_file
  has_many :downloads
end
