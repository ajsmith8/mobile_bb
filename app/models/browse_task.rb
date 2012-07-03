class BrowseTask < ActiveRecord::Base
  attr_accessible :description, :model_name, :parent_id, :rank, :xp_value
end
