class Collection < ApplicationRecord
  belongs_to :user
  has_one_attached :cover_art , dependent: :destroy
  has_many :samples , dependent: :destroy

  # name , downloads , :user_id , :description , :cover_art

  validates :name , uniqueness: { case_sensitive: false } ,format: {with: /[\.a-zA-z0-9]/ , message: "may only include alphanumeric characters and a ."}
  validates :name , presence: true ,on: :create
  validates :description , format: {with: /[\.a-zA-Z]/ , message: "may only include letters and a ."}
  validates :description , presence: true , on: :create
  validates :cover_art, presence: true, blob: { content_type: :image, size_range: 1..(5.megabytes)}
end
