class User < ActiveRecord::Base
  attr_accessible :name, :email, :uid, :provider, 
      :is_temp_user, :tech, :education, :politics, :current_events, :health, :finance, :level, :xp, :token
      
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth["info"]["email"]
    end
  end
end
