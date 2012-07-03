class TaskActivitiesController < ApplicationController
  respond_to :json
  
  def index
    respond_with TaskActivity.all
  end
  
  def show
    respond_with TaskActivity.find(params[:id])
  end
  
  def create
    respond_with TaskActivity.create(params[:task_activity])
  end
  
  def update
    respond_with TaskActivity.update(params[:id], params[:task_activity])
  end
  
  def destroy
    respond_with TaskActivity.destroy(params[:id])
  end
end
