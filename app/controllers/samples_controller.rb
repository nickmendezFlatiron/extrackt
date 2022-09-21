class SamplesController < ApplicationController

  def search
    search = {}
    params.keys[0..-4].each do |p|
    if p == "key" || p == "name"
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
    if params.has_key?("key") && !params["key"].empty?
      ans = res.filter do |r|
        test_case =  params["key"].all? {|e| r["key"].include?(e)}
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
  
  # def show
  #   if current_user
      
  #     sample = Sample.find_by!(:id => params[:id])
  #     path = ActiveStorage::Blob.service.path_for(sample.audio_file)
  #     debugger
  #     send_file(path , type: 'audio/x-wav', disposition: "attachment")
  #   else
  #     render json: {errors: ["Purchase more credits to download this file"]} , status: :unprocessable_entity
  #   end
  # end

  private
  def sample_params
    params.permit(:key, :bpm, :name, :genre, :sample_type, :audio_file)
  end
end
