class QuizQ < ActiveRecord::Base
  attr_accessible :source_id, :t_id, :question, :score, :correct, :wrong1, :wrong2, :wrong3, :wrong4
  
  belongs_to :source
end
