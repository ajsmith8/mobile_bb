MobileBb.Views.AdminSignIn = Backbone.View.extend({

	template: JST['admin/sign_in'],
	
	events: {
		'submit #admin_sign_in' : 'adminSignIn'
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	adminSignIn: function() {
		event.preventDefault();
		var email = $('#admin_email').val();
		var password = $('#admin_password').val();
		if (email === "good" && password === "work") {
			Backbone.history.navigate('admin/ts', true);
		} else {
			alert("you fail");
		}
	}
});
