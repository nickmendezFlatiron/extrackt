class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize_user

  rescue_from ActiveRecord::RecordNotFound , with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid , with: :render_unprocessable_entity

  def current_user
    User.find_by(:id => session[:user_id])
  end

  def authorize_user
    render json: {errors: ["Please login or create a new account" , "Unauthorized user."]} , status: :unauthorized unless current_user 
  end
  
  private

  def render_not_found error
    render json: {errors: ["#{error.model} Not Found"]}, status: :not_found
  end 

  def render_unprocessable_entity
    render json: {errors: [invalid.record.errors.full_messages]} , status: :unprocessable_entity
  end
end

