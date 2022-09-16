class UsersController < ApplicationController
  skip_before_action :authorize_user , only: [:create]

  def create
    user = User.create(user_params)
    user.account_type = "free"
    session[:user_id] = user.id
    render json: user , status: :created
  end 

  def show
    if current_user
      render json: current_user , status: :ok
    else
      render json: [error: "Not Authorized , please login"] ,status: :unauthorized
    end 
  end

  def destroy
  end 

  private

  def user_params
    params.permit(:username , :email , :password , :password_confirmation , :full_name)
  end
end
