class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :email
      t.string :name
      t.boolean :is_admin, default: false
      t.boolean :is_temp_user, default: true
      t.timestamps
    end
  end
end
