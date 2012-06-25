class CURelsController < ApplicationController
  respond_to :json
  
  def index
    respond_with CURel.all
  end
  
  def show
    respond_with CURel.find(params[:id])
  end
  
  def create
    respond_with CURel.create(params[:c_u_rel])
  end
  
  def update
    respond_with CURel.update(params[:id], params[:c_u_rel])
  end
  
  def destroy
    respond_with CURel.destroy(params[:id])
  end
end
