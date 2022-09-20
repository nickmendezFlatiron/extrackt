class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :cover_art_url, :downloads, :description, :created_at
  has_one :user
  has_many :samples

  def cover_art_url
    Rails.application.routes.url_helpers.rails_blob_path(self.object.cover_art, only_path: true)
  end
end
