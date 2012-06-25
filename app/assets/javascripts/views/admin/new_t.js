MobileBb.Views.AdminNewT = Backbone.View.extend({

	template: JST['admin/new_t'],
	
	events: {

	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});
