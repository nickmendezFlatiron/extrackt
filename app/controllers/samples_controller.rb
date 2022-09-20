class SamplesController < ApplicationController

  def search
    search = {}
    params.keys[0..-4].each do |p|
    if p == "key"
      next
    end
     search[p] = params[p]
    end

    res = Sample.where(search)
    # if the key parameter is not empty then i want to check if each result includes each "key" value
    # check if every provided param key string is included in result key array
    if params.has_key?("key") && !params["key"].empty?
      ans = res.filter do |r|
        test_case =  params["key"].all? {|e| r["key"].include?(e)}
        test_case
      end
      if ans.empty?
       return render json: {} ,status: :ok
      end
      byebug
      return render json: ans , status: :ok
    end
    # return render json: res , status: :ok
  end
  

  private
  def sample_params
    params.permit(:key, :bpm, :name, :genre, :sample_type, :audio_file)
  end
end
