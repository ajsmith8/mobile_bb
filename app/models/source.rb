class Source < ActiveRecord::Base
  attr_accessible :description, :reason_id, :url, :score, :is_supporting, :t_id
  
  has_many :quiz_qs, dependent: :destroy
  belongs_to :reason
end
