class SampleSerializer < ActiveModel::Serializer
  attributes  :name, :key, :bpm, :genre, :sample_type, :audio_file, :sample_url, :artist, :collection_id
  # has_one :collection

  def sample_url
    Rails.application.routes.url_helpers.rails_blob_path(self.object.audio_file, only_path: true)
  end 

  def artist
    collection = Collection.find(self.object.collection_id)
    collection.user.username
  end

end
