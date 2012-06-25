class User < ActiveRecord::Base
  attr_accessible :name, :email, :uid, :provider, :is_temp_user
end
