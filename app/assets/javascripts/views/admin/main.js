MobileBb.Views.AdminMain = Backbone.View.extend({

	template: JST['admin/main'],
	
	events: {
		'click #new_t' : 'newT'
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	newT: function() {
		Backbone.history.navigate('admin/new-t', true);
	}
});
