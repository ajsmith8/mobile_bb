class CreateReasons < ActiveRecord::Migration
  def change
    create_table :reasons do |t|
      t.integer :t_id
      t.text :description
      t.boolean :is_pro
      t.integer :score, default: 0
      t.string :title
      t.boolean :is_approved, default: false
      t.timestamps
    end
  end
end
