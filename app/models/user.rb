class User < ActiveRecord::Base
  attr_accessible :name, :email, :uid, :provider, 
      :is_temp_user, :tech, :education, :politics, :current_events, :health, :finance, :achiever, 
      :explorer, :socializer, :level, :xp
end
