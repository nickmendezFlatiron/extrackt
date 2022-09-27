class SamplesController < ApplicationController
  before_action :set_active_storage_host, only: [:show]

  def search
    search = {}
    params.keys[0..-4].each do |p|
    if p == "sample_key" || p == "name"
      next
    end
     search[p] = params[p]
    end

    res = Sample.where(search)
    if params.has_key?("name")
      res = res.find_all {|r| r["name"].downcase.include?(params["name"].downcase)}
    end
    # if the key parameter is not empty then i want to check if each result includes each "key" value
    # check if every provided param key string is included in result key array
    if params.has_key?("sample_key") && !params["sample_key"].empty?
      ans = res.filter do |r|
        test_case =  params["sample_key"].all? {|e| r["sample_key"].include?(e)}
        test_case
      end
      if ans.empty?
       return head :no_content
      end
      return render json: ans , status: :ok
    end
    if res.empty?
      return head :no_content
    end
    return render json: res , status: :ok
  end
  
  def show
    if current_user
      sample = Sample.find_by!(:id => params[:id])
      response.headers["Content-Type"] = sample.audio_file.content_type
      response.headers["Content-Disposition"] = "attachment; filename=#{sample.name}.wav"
      sample.audio_file.download {|c| response.stream.write(c)}
      
      if current_user.downloads.find_by(sample_id: sample.id).nil?
        sample.update({download_count: sample.download_count + 1})
        current_user.downloads.create!(sample_id: sample.id)  
      end
      return response.stream.close
    else
      render json: {errors: ["Purchase more credits to download this file"]} , status: :unprocessable_entity
    end
  end

  def destroy
    sample = Sample.find_by!(id: params[:id])
    if current_user.id == sample.collection.user_id
      sample.destroy
      return head :no_content
    else
      render json: {errors: "Delete unsuccessful"} , status: :unprocessable_entity
    end
  end

  private
  def sample_params
    params.permit(:sample_key, :bpm, :name, :genre, :sample_type, :audio_file)
  end

  def set_active_storage_host
    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end

end
