MobileBb.Routers.AdminRouter = Backbone.Router.extend({
	routes: {
		'admin'						: 'adminMain',
		'admin/ts/:id' 				: 'adminShowT',
		'admin/ts/:id/edit' 		: 'adminEditT',
		'admin/reasons/:id' 		: 'adminShowR',
		'admin/reasons/:id/edit' 	: 'adminEditR',
		'admin/sources/:id' 		: 'adminShowS',
		'admin/sources/:id/edit' 	: 'adminEditS',
		'admin/quiz_qs/:id/edit' 	: 'adminEditQuizQ'
	},
	
	initialize: function(options) {
		this.current_user = options.current_user;
		this.topics = options.topics;
		this.reasons = options.reasons;
		this.categories = options.categories;
		this.quiz_qs = options.quiz_qs;
		this.sources = options.sources;
		this.tasks = options.tasks;
	},
	
	adminMain: function() {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminMain({
				topics: this.topics
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}	
	},
	adminShowT: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminShowT({
				topics: this.topics,
				topic: this.topics.where({id: parseInt(id)})[0],
				reasons: this.reasons
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminEditT: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminEditT({
				topic: this.topics.where({id: parseInt(id)})[0],
				categories: this.categories
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminShowR: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminShowR({
				reason: this.reasons.where({id: parseInt(id)})[0],
				sources: this.sources
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminEditR: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminEditR({
				reason: this.reasons.where({id: parseInt(id)})[0]
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminShowS: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminShowS({
				source: this.sources.where({id: parseInt(id)})[0],
				quiz_qs: this.quiz_qs
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminEditS: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminEditS({
				source: this.sources.where({id: parseInt(id)})[0]
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	},
	
	adminEditQuizQ: function(id) {
		if (this.current_user.get("is_admin")) {
			var view = new MobileBb.Views.AdminEditQuizQ({
				quiz_q: this.quiz_qs.where({id: parseInt(id)})[0]
			});
			$('#main_page').html(view.render().el);
		} else {
			alert("you do not have permission to access this");
			Backbone.history.navigate('', true);
		}
	}
});
