class Sample < ApplicationRecord
  belongs_to :collection
  has_one_attached :audio_file , dependent: :destroy
  has_many :downloads , dependent: :destroy

  # name , key , bpm , genre , type , collection_id , downloads , audio_file

end
