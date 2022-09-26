class DownloadsController < ApplicationController

  def show

    if current_user
      downloads = current_user.downloads.paginate(:page => params[:id], :per_page => 15)
      render json: downloads, status: :ok
    else 
      render json: [errors: "No downloads found"], status: :unprocessable_entity
    end
  end
end
