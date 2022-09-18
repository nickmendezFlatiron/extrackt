class Collection < ApplicationRecord
  belongs_to :user
  has_one_attached :cover_art , dependent: :destroy
  has_many :samples , dependent: :destroy

  # name , downloads , :user_id , :description , :cover_art
  validates_associated :samples
  validates :name , uniqueness: { case_sensitive: false } ,format: {with: /[\.a-zA-z0-9\s]/ , message: "may only include alphanumeric characters, spaces, and a ."}
  validates :name , presence: true ,on: :create
  validates :description , format: {with: /[0-9a-zA-Z\s[:punct:]_-]/ , message: "may only include letters, spaces, and punctuation"}
  validates :description , presence: true , on: :create
  validates :cover_art, presence: true, blob: { content_type: :image, size_range: 1..(5.megabytes)}
  validates :user_id , numericality: true
end
