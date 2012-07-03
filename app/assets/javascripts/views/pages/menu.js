MobileBb.Views.PagesMenu = Backbone.View.extend({
	
	template: JST['pages/menu'],
	
	events: {
		'click #back' : 'back'
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	back: function() {
		parent.history.back();
	}
});