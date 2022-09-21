class UsersController < ApplicationController
  skip_before_action :authorize_user , only: [:create]

  def create
    user = User.create!(user_params)
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

  def update
      user = User.find(params[:id]) 
      user.update!({full_name: params[:full_name], email: params[:email]})
      render json: user , status: :ok
  end

  def destroy
    if current_user 
      current_user.destroy
      session.delete :current_user
      head :no_content
    end
  end 

  private

  def user_params
    params.permit(:username , :email , :password , :password_confirmation , :full_name)
  end
end
