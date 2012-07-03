class AddLevelReqToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :lvl_req, :integer, default: 0
  end
end
