class DownloadSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sample
  has_one :user
end
