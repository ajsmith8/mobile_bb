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
		var task_id = this.options.parent_task.get("id");
		var t_id = this.options.topic.get("id");
		Backbone.history.navigate('browse_reasons/' + task_id + '/' + t_id, true);
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	}
});