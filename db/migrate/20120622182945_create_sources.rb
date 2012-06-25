class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.integer :reason_id
      t.text :description
      t.string :url
      t.integer :score, default: 0
      t.boolean :is_approved, default: false
      t.boolean :is_supporting
      t.timestamps
    end
  end
end
