class SampleSerializer < ActiveModel::Serializer
  attributes :id, :name, :key, :bpm, :genre, :type, :audio_file, :downloads
  has_one :collection
end
