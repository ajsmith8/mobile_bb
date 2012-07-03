MobileBb.Views.AdminEditS = Backbone.View.extend({
	template: JST['admin/edit_s'],
	
	events: {
		'submit #source' : 'updateS'
	},
	
	render: function() {
		$(this.el).html(this.template({
			source: this.options.source
		}));
		return this;
	},
	
	updateS: function() {
		event.preventDefault();
		this.options.source.set({
			description: $('#description').val(),
			url: $('#url').val(),
		});
		this.options.source.save();
		Backbone.history.navigate('admin/sources/'+ this.options.source.get("id"), true);
	}
});