class T < ActiveRecord::Base
  attr_accessible :title, :description, :source_url, :url, :score, :product, :fraction, 
        :politics, :education, :finance, :tech, :health, :current_events, :reasons_approved
        
  has_many :reasons, dependent: :destroy
end
