class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :model_name
      t.integer :parent_id
      t.timestamps
    end
  end
end
