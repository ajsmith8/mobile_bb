MobileBb.Views.AdminEditT = Backbone.View.extend({

	template: JST['admin/edit_t'],
	
	events: {
		'submit #topic' : 'updateT'
	},
	
	render: function() {
		$(this.el).html(this.template({
			topic: this.options.topic,
			categories: this.options.categories,
		}));
		return this;
	},
	
	updateT: function() { 
		event.preventDefault();
		this.options.topic.set({
			title: $('#title').val(),
			description: $('#description').val()
		});
		this.options.topic.save();
		Backbone.history.navigate('admin/ts/' + this.options.topic.get("id"), true);
	}
});