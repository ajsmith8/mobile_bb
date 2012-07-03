class CreateBrowseTaskActivities < ActiveRecord::Migration
  def change
    create_table :browse_task_activities do |t|
      t.integer :task_id
      t.integer :user_id
      t.integer :reference_id
      t.string :data
      t.boolean :is_complete
      t.timestamps
    end
    
    add_column :sources, :t_id, :integer
  end
end
