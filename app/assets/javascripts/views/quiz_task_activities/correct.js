MobileBb.Views.QuizTaskActivitiesQuizCorrect = Backbone.View.extend({
	
	template: JST['quiz_task_activities/correct'],
	
	events: {
		'click #menu' 		: 'menu',
		'click #explore' 	: 'explore',
		'click #next'		: 'next'
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	},
	
	next: function() {
		var topic = this.options.topic;
		var current_user = this.options.current_user;
		var q_t_acts = this.options.q_t_acts;
		this.options.quiz_qs.isTopicDone(q_t_acts, topic, current_user);
	}
});