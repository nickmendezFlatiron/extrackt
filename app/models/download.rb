class Download < ApplicationRecord
  belongs_to :sample
  belongs_to :user
end
