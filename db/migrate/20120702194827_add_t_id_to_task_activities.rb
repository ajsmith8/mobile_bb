class AddTIdToTaskActivities < ActiveRecord::Migration
  def change
    add_column :task_activities, :t_id, :integer
    add_column :browse_task_activities, :t_id, :integer
    add_column :quiz_task_activities, :t_id, :integer
  end
end
