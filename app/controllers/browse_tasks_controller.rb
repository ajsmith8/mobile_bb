class BrowseTasksController < ApplicationController
  respond_to :json
  
  def index
    respond_with BrowseTask.all
  end
  
  def show
    respond_with BrowseTask.find(params[:id])
  end
  
  def create
    respond_with BrowseTask.create(params[:browse_task])
  end
  
  def update
    respond_with BrowseTask.update(params[:id], params[:browse_task])
  end
  
  def destroy
    respond_with BrowseTask.destroy(params[:id])
  end
end
