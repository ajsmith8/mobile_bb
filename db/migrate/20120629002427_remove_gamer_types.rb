class RemoveGamerTypes < ActiveRecord::Migration
  def up
    remove_column :users, :achiever
    remove_column :users, :explorer
    remove_column :users, :socializer
    remove_column :tasks, :gamer_type
  end

  def down
  end
end
