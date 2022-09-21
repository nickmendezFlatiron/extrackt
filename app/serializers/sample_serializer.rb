class SampleSerializer < ActiveModel::Serializer
  attributes :id, :name, :key, :bpm, :genre, :sample_type,  :artist, :collection_id, :sample_url
  # has_one :collection

  def sample_url
    Rails.application.routes.url_helpers.rails_blob_path(self.object.audio_file, only_path: true)
  end 

  def artist
    collection = Collection.find(self.object.collection_id)
    collection.user.username
  end

end
