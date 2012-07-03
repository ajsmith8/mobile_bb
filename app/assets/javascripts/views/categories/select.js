MobileBb.Views.CategoriesSelect = Backbone.View.extend({
	
	template: JST['categories/select'],
	
	events: {
		'click #category' : 'updateCategory',
		'click #next' : 'verifySelection'
	},
	
	render: function() {
		$(this.el).html(this.template({
			current_user: this.options.current_user,
			categories: this.options.categories
		}));
		return this;
	},
	
	updateCategory: function() {
		var value;
		var category = this.options.categories.where({id: parseInt($(event.target).val())})[0];
		var category_name = category.get("name").toLowerCase().replace(" ", "_");
		var current_value = this.options.current_user.get(category_name);
		if (current_value >= 10) {
			value = current_value - 10;
			this.options.current_user.set(category_name, value);
			this.options.current_user.save();
		} else {
			value = current_value + 10;
			this.options.current_user.set(category_name, value);
			this.options.current_user.save();
		}
	},
	
	verifySelection: function() {
		var has_chosen;
		var current_user = this.options.current_user
		this.options.categories.each(function(c) {
			if (current_user.get(c.get("name").toLowerCase().replace(" ", "_")) >= 10) {
				has_chosen = true;
			}
		});
		if (!has_chosen) {
			event.preventDefault();
			alert("Please choose at least one category");
		} else {
			Backbone.history.navigate('main', true);
		}
	}
});