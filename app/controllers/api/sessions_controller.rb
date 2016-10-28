class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.valid? && current_user != @user
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: "Already logged out", status: 404
    end
  end
end
