class CTRelsController < ApplicationController
  respond_to :json
  
  def index
    respond_with CTRel.all
  end
  
  def show
    respond_with CTRel.find(params[:id])
  end
  
  def create
    respond_with CTRel.create(params[:c_t_rel])
  end
  
  def update
    respond_with CTRel.update(params[:id], params[:c_t_rel])
  end
  
  def destroy
    respond_with CTRel.destroy(params[:id])
  end
end
