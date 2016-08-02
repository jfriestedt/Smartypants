class Api::SessionsController < ApplicationController
  def create
    if current_user
      render json: ["You are already logged in"], status: 404
    else
      @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
      if @user
        login(@user)
        render "api/users/show"
      else
        render json: ["Invalid Credentials"], status: 401
      end
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: ['You are not logged in'], status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['You are not logged in'], status: 404
    end
  end
end
