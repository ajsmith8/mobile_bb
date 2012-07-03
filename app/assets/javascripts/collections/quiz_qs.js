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
	}
});
