MobileBb.Views.BrowseTaskActivitiesBrowseReasons = Backbone.View.extend({
	
	template: JST['browse_task_activities/browse_reasons'],
	
	events: {
		'click #next' 		: 'isTopicDone',
		'click #menu' 		: 'menu',
		'click #explore' 	: 'explore'
	},
	
	render: function() {
		$(this.el).html(this.template({
			reason: this.options.reason,
			sources: this.options.sources
		}));
		return this;
	},
		
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	},
	
	isTopicDone: function() {
		this.remove();
		this.options.reasons.isTopicDone(this.options.b_t_acts, this.options.topic, this.options.current_user);
	}
});