class DropCuRelsAddToUsers < ActiveRecord::Migration
  def up
    drop_table :c_user_rels
    add_column :users, :tech, :integer, default: 0
    add_column :users, :education, :integer, default: 0
    add_column :users, :politics, :integer, default: 0
    add_column :users, :health, :integer, default: 0
    add_column :users, :current_events, :integer, default: 0
    add_column :users, :finance, :integer, default: 0
    add_column :users, :xp, :integer, default: 0
    add_column :users, :level, :integer, default: 0
    add_column :users, :achiever, :integer, default: 0
    add_column :users, :explorer, :integer, default: 0
    add_column :users, :socializer, :integer, default: 0
    add_column :tasks, :rank, :integer, default: 0
    add_column :tasks, :xp_value, :integer
    add_column :tasks, :gamer_type, :string
  end

  def down
  end
end
