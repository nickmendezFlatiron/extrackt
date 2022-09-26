class DownloadsController < ApplicationController

  def index
    if current_user
      downloads = current_user.downloads
      render json: downloads, status: :ok
    else 
      render json: [errors: "No downloads found"], status: :unprocessable_entity
    end
  end
end
