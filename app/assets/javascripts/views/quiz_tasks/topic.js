MobileBb.Views.QuizTasksTopic = Backbone.View.extend({
	
	template: JST['quiz_tasks/topic'],
	
	events: {
		'click #continue' 	: 'quizTopic',
		'click #explore' 	: 'explore',
		'click #menu' 		: 'menu'
	},
	
	render: function() {
		$(this.el).html(this.template({
			topic: this.options.topic
		}));
		return this;
	},
	
	quizTopic: function() {
		var q_t_acts = this.options.quiz_task_activities;
		var topic = this.options.topic;
		var current_user = this.options.current_user;
		this.options.quiz_qs.isTopicDone(q_t_acts, topic, current_user);
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	}
});