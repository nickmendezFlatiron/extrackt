class User < ApplicationRecord
  has_secure_password
  has_many :collections
  has_many :downloads
  has_many :samples , through: :downloads
end
