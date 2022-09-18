class Sample < ApplicationRecord
  belongs_to :collection
  has_one_attached :audio_file , dependent: :destroy
  has_many :downloads , dependent: :destroy

  # name , key , bpm , genre , type , collection_id , downloads , audio_file
  validates :name , presence: true , format: {with: /[a-zA-z0-9_-]/ , message: "may only include alphanumeric characters , underscores_ , dashes-"}
  validates :bpm , presence: true , numericality: { only_integer: true }
  validates :genre , presence: true , inclusion: {in: [ 
    "pop","rock","hip-hop","rap","country","rnb", "jazz",
    "metal", "electronic", "soul", "ambient", "funk","raggae", 
    "disco","classical","house","indie","techno","trap","dubstep", 
    "gospel","latin", "raggaeton", "grime", "edm", "synthwave", "cinematic", 
    "trance", "experimental","electro","idm","acapella"], message: "is not a valid genre" }
  validates :sample_type, presence: true ,inclusion: {
    in: ['drum', 'foley', 'fx', "loop", "melody", "one-shot", "pad", "percussion", "vocal"],
    message: "is not a valid sample type"
  }
  validates :audio_file , presence: true, blob: { content_type: ['audio/x-wav']}
end
