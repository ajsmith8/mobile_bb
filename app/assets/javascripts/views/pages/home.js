MobileBb.Views.PagesHome = Backbone.View.extend({

	template: JST['pages/home'],
	
	events: {
		'click #admin_sign_in' : 'adminSignIn'
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	adminSignIn: function() {
		Backbone.history.navigate('admin', true);
	}
});
