MobileBb.Views.QuizTasksTopic = Backbone.View.extend({
	
	template: JST['quiz_tasks/topic'],
	
	events: {
		
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	}
});