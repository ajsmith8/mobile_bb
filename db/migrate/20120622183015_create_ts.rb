class CreateTs < ActiveRecord::Migration
  def change
    create_table :ts do |t|
      t.string :title
      t.text :description
      t.string :source_url
      t.string :url
      t.integer :score, default: 0
      t.boolean :is_approved, default: false
      t.timestamps
    end
  end
end
