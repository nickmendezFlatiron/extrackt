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
      params.keys[1..-3].each do |p|
        collection.samples.create!({
          name: params[p][:name],
          key: JSON.parse(params[p][:key]),
          bpm: params[p][:bpm],
          genre: params[p][:genre],
          sample_type: params[p][:sample_type],
          audio_file: params[p][:audio_file]
          })
      end
        render json: collection , status: :created
    end
  end

  def show
    collection = Collection.find(params[:id])
    render json: collection , status: :ok
  end

  def recent
    recent = Collection.order(created_at: :desc ).limit(10)
    render json: recent, each_serializer: MarketplaceCollectionSerializer ,status: :created
  end

  def popular
    popular = Collection.order(downloads:  :desc).limit(10)
    render json: popular, each_serializer: MarketplaceCollectionSerializer ,status: :created
  end

  private
  # name , downloads , :user_id , :description , :cover_art
  def collection_params
    params.permit(:name, :description, :cover_art)
  end
end
