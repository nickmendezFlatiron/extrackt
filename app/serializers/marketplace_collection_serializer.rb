class MarketplaceCollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :cover_art_url, :artist 
  has_one :user

  def cover_art_url
    Rails.application.routes.url_helpers.rails_blob_path(self.object.cover_art, only_path: true)
  end

  def artist
    self.object.user.username
  end
end