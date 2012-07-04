MobileBb.Collections.QuizQs = Backbone.Collection.extend({
	
	model: MobileBb.Models.QuizQ,
	url: 'quiz_qs',
	
	comparator: function(quiz_q) {
		return - quiz_q.get("score");
	},
	
	plusScore: function (quiz_q) {
		quiz_q.set({score: quiz_q.get("score") + 1});
		quiz_q.save();
		this.sort();
	},
	
	minusScore: function (quiz_q) {
		quiz_q.set({score: quiz_q.get("score") - 1});
		quiz_q.save();
		this.sort();
	},
	
	isTopicDone: function(q_t_acts, topic, current_user) {
		if (q_t_acts.where({task_id: 1, t_id: topic.get("id"), user_id: current_user.get("id"), reference_id: topic.get("id")})[0]) {
			Backbone.history.navigate('main', true);
		} else {
			this.findQuestion(q_t_acts, topic, current_user);
			Backbone.history.navigate('quiz_questions/' + topic.get("id") + '/' + this.quiz_q.get("id"), true);
		}
	},
	
	findQuestion: function(q_t_acts, topic, current_user) {
		var q_array = [], quiz_q;
		var q_array = this.where({t_id: topic.get("id"), is_approved: true});
		var count = 0, q_selected = false;
		
		q_array.sort(function(a, b) {
			return b.get("score") - a.get("score");
		});
		while (count < q_array.length && !q_selected) {
			if (!(q_t_acts.where({user_id: current_user.get("id"), task_id: 2, reference_id: q_array[count].get("id")})[0])) {
				quiz_q = q_array[count];
				q_selected = true;
			}
			count = count + 1;
		}
		this.quiz_q = quiz_q;
	}
});
