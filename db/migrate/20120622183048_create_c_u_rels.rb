class CreateCURels < ActiveRecord::Migration
  def change
    create_table :c_u_rels do |t|
      t.integer :category_id
      t.integer :user_id
      t.timestamps
    end
  end
end
