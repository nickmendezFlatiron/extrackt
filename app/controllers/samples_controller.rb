class SamplesController < ApplicationController

  

  private
  def sample_params
    params.permit(:key, :bpm, :name, :genre, :sample_type, :audio_file)
  end
end
