class CreateQuizTasks < ActiveRecord::Migration
  def change
    create_table :quiz_tasks do |t|
      t.string :description
      t.string :model_name
      t.integer :parent_id
      t.integer :xp_value
      t.integer :lvl_req, default: 0
      t.integer :rank, default: 0
      t.timestamps
    end
  end
end
