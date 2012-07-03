MobileBb.Views.PagesHome = Backbone.View.extend({

	template: JST['pages/home'],
	
	events: {
		'click #next' : 'next'
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	next: function() {
		Backbone.history.navigate('categories', true);
	}
});
