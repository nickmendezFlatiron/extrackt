class Sample < ApplicationRecord
  belongs_to :collection
  has_one_attached :audio_file , dependent: :destroy
  has_many :downloads , dependent: :destroy

  validates :name , presence: true , format: {with: /[a-zA-z0-9_-]/ , message: "may only include alphanumeric characters , underscores_ , dashes-"}, length: { maximum: 40 }
  validates :bpm , presence: true , numericality: { only_integer: true }
  validates :genre , presence: true , inclusion: {in: [ 
    "pop","rock","hip-hop","rap","country","rnb", "jazz",
    "metal", "electronic", "soul", "ambient", "funk","raggae", 
    "disco","classical","house","indie","techno","trap","dubstep", 
    "gospel","latin", "raggaeton", "grime", "edm", "synthwave", "cinematic", 
    "trance", "experimental","electro","idm","acapella"], message: "is an ivalid genre, select a genre from the provided list" }
  validates :sample_type, presence: true ,inclusion: {
    in: ['drum', 'foley', 'fx', "loop", "melody", "one-shot", "pad", "percussion", "vocal"],
    message: "is not a valid sample type, select a sample type from the provided list"
  }
  validates :audio_file , presence: true, blob: { content_type: ['audio/x-wav']}
  validates :collection_id, numericality: true
  validate :key_validator

  def key_validator
    letter_count = key.select {|k| ["a", "b", "c", "d", "e", "f", "g"].include?(k)==true}
    step_count = key.select {|k| ["sharp", "flat"].include?(k)==true}
    scale_count = key.select {|k| ["major", "minor"].include?(k)==true}

    if letter_count.length > 1 
      errors.add(:key, "invalid, only 1 letter allowed ")
    end
    if step_count.length > 1
      errors.add(:key, "invalid, only 1 half step allowed")
    end
    if scale_count.length > 1
      errors.add(:key, "invalid, only 1 scale allowed")
    end
  end

end
