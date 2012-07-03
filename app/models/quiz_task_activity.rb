class QuizTaskActivity < ActiveRecord::Base
  attr_accessible :task_id, :user_id, :reference_id, :data, :is_complete, :t_id
end
