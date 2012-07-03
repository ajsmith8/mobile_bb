class BrowseTaskActivitiesController < ApplicationController
  respond_to :json
  
  def index
    respond_with BrowseTaskActivity.all
  end
  
  def show
    respond_with BrowseTaskActivity.find(params[:id])
  end
  
  def create
    respond_with BrowseTaskActivity.create(params[:browse_task_activity])
  end
  
  def update
    respond_with BrowseTaskActivity.update(params[:id], params[:browse_task_activity])
  end
  
  def destroy
    respond_with BrowseTaskActivity.destroy(params[:id])
  end
end
