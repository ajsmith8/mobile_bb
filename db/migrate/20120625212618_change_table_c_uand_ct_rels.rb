class ChangeTableCUandCtRels < ActiveRecord::Migration
  def up
    rename_table :c_t_rels, :c_topic_rels
    rename_table :c_u_rels, :c_user_rels
  end

  def down
  end
end
