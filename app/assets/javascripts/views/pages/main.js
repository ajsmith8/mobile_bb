MobileBb.Views.PagesMain = Backbone.View.extend({
	
	template: JST['pages/main'],
	
	events: {
		'click #menu' : 'menu',
		'click #explore' : 'explore'
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	}
});