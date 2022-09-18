class CollectionsController < ApplicationController

  def create
    if current_user
      collection = Collection.create!({
        cover_art: params[:collection][:cover_art],
        name: params[:collection][:name],
        description: params[:collection][:description],
        user_id: current_user.id
      })
        # iterate over the params object except for the last 2 params in the object
      len = params.keys.length - 3
      keys = params.keys
      
      keys[1..len].each do |p|
        Sample.create!({
          name: params[p][:name],
          key: JSON.parse(params[p][:key]),
          bpm: params[p][:bpm],
          genre: params[p][:genre],
          sample_type: params[p][:sample_type],
          collection_id: collection.id,
          audio_file: params[p][:audio_file]
          })
      end
        
    end
  end


  private
  # name , downloads , :user_id , :description , :cover_art
  def collection_params
    params.permit(:name, :description, :cover_art)
  end
end
