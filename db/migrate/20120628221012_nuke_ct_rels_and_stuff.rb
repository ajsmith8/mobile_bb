class NukeCtRelsAndStuff < ActiveRecord::Migration
  def up
    drop_table :c_topic_rels
    add_column :ts, :politics, :integer, default: 0
    add_column :ts, :current_events, :integer, default: 0
    add_column :ts, :finance, :integer, default: 0
    add_column :ts, :health, :integer, default: 0
    add_column :ts, :tech, :integer, default: 0
    add_column :ts, :education, :integer, default: 0
    add_column :ts, :reasons_approved, :integer
    add_column :ts, :product, :integer
    add_column :ts, :fraction, :float
  end

  def down
  end
end
