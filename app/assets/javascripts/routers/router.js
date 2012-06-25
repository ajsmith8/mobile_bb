MobileBb.Routers.Router = Backbone.Router.extend({
	routes: {
		'' 				: 'home',
		'admin' 		: 'adminSignIn',
		'admin/ts'		: 'adminMain',
		'admin/new-t' 	: 'adminNewT'
	},
	
	home: function() {
		var view = new MobileBb.Views.PagesHome();
		$('#main_page').html(view.render().el);
	},
	
	adminSignIn: function() {
		var view = new MobileBb.Views.AdminSignIn();
		$('#main_page').html(view.render().el);
	},
	
	adminMain: function() {
		var view = new MobileBb.Views.AdminMain();
		$('#main_page').html(view.render().el);
	},
	adminNewT: function() {
		var view = new MobileBb.Views.AdminNewT();
		$('#main_page').html(view.render().el);
	}
});
