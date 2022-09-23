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
          sample_key: JSON.parse(params[p][:sample_key]),
          bpm: params[p][:bpm],
          genre: params[p][:genre],
          sample_type: params[p][:sample_type],
          audio_file: params[p][:audio_file]
          })
      end
        render json: collection , status: :created
    end
  end

  def index
    user = User.find_by!(id: params[:user_id])
    if current_user == user
      render json: user.collections , status: :ok,  each_serializer: MarketplaceCollectionSerializer ,status: :created
    end
  end 

  def show
    if params[:collection_id] && Collection.find_by(id: params[:collection_id]).user_id.to_i == current_user.id
      collection = Collection.find_by!(id: params[:collection_id])
      return render json: collection, status: :ok
    elsif params[:collection_id] && Collection.find_by(id: params[:collection_id]).user_id.to_i != current_user.id
      return render json: {errors: "You are not authorized to edit this sample pack"}, status: :unauthorized
    end
    collection = Collection.find_by!(id: params[:id])
    render json: collection , status: :ok
  end

  def update
    collection = Collection.find_by!(id: params[:id])
    if collection.user_id == current_user.id
      collection.update!(collection_params)
     return render json: collection , status: :ok
    else 
      render json: ["Update Unsuccessful"], status: :unprocessable_entity
    end
  end 

  def destroy
    collection = Collection.find_by!(id: params[:id])
    if current_user.id == collection.user_id
      collection.destroy
      return head :no_content
    else
      render json: {errors: "Delete unsuccessful"} , status: :unprocessable_entity
    end
    
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
