class UsersController < ApplicationController
  respond_to :json, :html
  
  def index
    respond_with User.all
  end
  
  def show
    respond_with User.find(params[:id])
  end
  
  def create
     if params[:user][:email] == ""
        redirect_to root_url
        return
      end
      temp = User.where(email: params[:user][:email]).first
      if !temp
        @user = User.create(params[:user])
      else
        @user = temp
      end
      session[:user_id] = @user.id
      redirect_to main_path
  end
  
  def update
    respond_with User.update(params[:id], params[:user])
  end
  
  def destroy
    respond_with User.destroy(params[:id])
  end
  
  def new
    @user = User.new
    @user.save
    session[:user_id] = @user.id
    redirect_to main_path
  end
end
