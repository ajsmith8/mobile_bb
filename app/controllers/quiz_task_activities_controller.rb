class QuizTaskActivitiesController < ApplicationController
  respond_to :json
  
  def index
    respond_with QuizTaskActivity.all
  end
  
  def show
    respond_with QuizTaskActivity.find(params[:id])
  end
  
  def create
    respond_with QuizTaskActivity.create(params[:quiz_task_activity])
  end
  
  def update
    respond_with QuizTaskActivity.update(params[:id], params[:quiz_task_activity])
  end
  
  def destroy
    respond_with QuizTaskActivity.destroy(params[:id])
  end
end
