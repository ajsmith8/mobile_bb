MobileBb.Views.AdminEditR = Backbone.View.extend({

	template: JST['admin/edit_r'],
	
	events: {
		'submit #reason' : 'updateR'
	},
	
	render: function() {
		$(this.el).html(this.template({
			reason: this.options.reason
		}));
		return this;
	},
	
	updateR: function() {
		event.preventDefault(); 
		this.options.reason.set({
			title: $('#title').val(),
			description: $('#description').val()
		});
		this.options.reason.save();
		Backbone.history.navigate('admin/reasons/' + this.options.reason.get("id"), true);
	}
});