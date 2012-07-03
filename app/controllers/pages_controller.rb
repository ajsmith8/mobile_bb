class PagesController < ApplicationController
  def index
    @user = User.new
  end
  
  def main
    
  end
  
  def admin
    @user = User.new
  end
end
