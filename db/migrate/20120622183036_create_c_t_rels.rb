class CreateCTRels < ActiveRecord::Migration
  def change
    create_table :c_t_rels do |t|
      t.integer :category_id
      t.integer :t_id
      t.timestamps
    end
  end
end
