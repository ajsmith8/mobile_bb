MobileBb.Views.AdminEditTask = Backbone.View.extend({
	
	template: JST['admin/edit_task'],
	
	events: {
		'submit #task' : 'updateTask'
	},
	
	render: function() {
		$(this.el).html(this.template({
			task: this.options.task
		}));
		return this;
	},
	
	updateTask: function() {
		event.preventDefault();
		this.options.task.set({
			rank: parseInt($('#rank').val()),
			parent_id: parseInt($('#parent_id').val()),
			model_name: $('#model_name').val(),
			description: $('#description').val(),
			xp_value: parseInt($('#xp_value').val()),
			gamer_type: $('input[name=gamer_type]:checked', '#task').val()
		});
		this.options.task.save();
		Backbone.history.navigate('admin/tasks', true);
	}
});