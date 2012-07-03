class Reason < ActiveRecord::Base
  attr_accessible :t_id, :description, :is_pro, :score, :title
  
  has_many :sources, dependent: :destroy
  belongs_to :t
end
