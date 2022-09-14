class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :cover_art, :downloads
  has_one :user
end
