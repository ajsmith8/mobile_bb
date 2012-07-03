class CreateQuizTaskActivities < ActiveRecord::Migration
  def change
    create_table :quiz_task_activities do |t|
      t.integer :task_id
      t.integer :user_id
      t.integer :reference_id
      t.string :data
      t.boolean :is_complete
      t.timestamps
    end
  end
end
