MobileBb.Views.BrowseTasksTopic = Backbone.View.extend({
	
	template: JST['browse_tasks/topic'],
	
	events: {
		'click #continue' 	: 'browseTopic',
		'click #explore' 	: 'explore',
		'click #menu' 		: 'menu'
	},
	
	render: function() {
		$(this.el).html(this.template({
			topic: this.options.topic
		}));
		return this;
	},
	
	browseTopic: function() {
		var b_t_acts = this.options.browse_task_activities;
		var topic = this.options.topic;
		var current_user = this.options.current_user;
		this.options.reasons.isTopicDone(b_t_acts, topic, current_user);
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	}
});