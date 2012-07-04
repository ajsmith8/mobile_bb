MobileBb.Routers.Router = Backbone.Router.extend({
	routes: {
		'' 								: 'home',
		'menu' 							: 'menu',
		'explore' 						: 'explore',
		'categories' 					: 'categorySelect',
		'main'							: 'main',
		'browse_tasks/:task_id/:t_id' 	: 'topicBrowseTask',
		'quiz_tasks/:task_id/:t_id' 	: 'topicQuizTask',
		'browse_reasons/:t_id/:r_id' 	: 'browseReasons',
		'quiz_questions/:t_id/:q_id'	: 'quizQuestions',
		'question/:q_id/correct' 		: 'quizCorrect',
		'question/:q_id/wrong' 			: 'quizWrong'
		
	},
	
	initialize: function(options) {
		this.current_user = options.current_user;
		this.users = options.users;
		this.topics = options.topics;
		this.reasons = options.reasons;
		this.categories = options.categories;
		this.quiz_qs = options.quiz_qs;
		this.sources = options.sources;
		this.tasks = options.tasks;
		this.quiz_tasks = options.quiz_tasks;
		this.quiz_task_activities = options.quiz_task_activities;
		this.browse_tasks = options.browse_tasks;
		this.browse_task_activities = options.browse_task_activities;
	},
	
	home: function() {
		var view = new MobileBb.Views.PagesHome({
			current_user: this.current_user,
			users: this.users
		});
		$('#main_page').html(view.render().el);
	},
	
	menu: function() {
		var view = new MobileBb.Views.PagesMenu({
			
		});
		$('#main_page').html(view.render().el);
	},
	
	explore: function() {
		this.users.fetch();
		var view = new MobileBb.Views.PagesExplore({
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			topics: this.topics,
			categories: this.categories,
			tasks: this.tasks,
			task_activities: this.task_activities,
			browse_tasks: this.browse_tasks,
			browse_task_activities: this.browse_task_activities,
			quiz_tasks: this.quiz_tasks,
			quiz_task_activities: this.quiz_task_activities
		});
		$('#main_page').html(view.render().el);
	},
	
	categorySelect: function() {
		var view = new MobileBb.Views.CategoriesSelect({
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			categories: this.categories
		});
		$('#main_page').html(view.render().el);
	},
	main: function() {
		var view = new MobileBb.Views.PagesMain({
			
		});
		$('#main_page').html(view.render().el);
	},
	
	topicBrowseTask: function(task_id, t_id) {
		var view = new MobileBb.Views.BrowseTasksTopic({
			topic: this.topics.where({id: parseInt(t_id)})[0],
			current_user: this.current_user,
			browse_task_activities: this.browse_task_activities,
			reasons: this.reasons
		});
		$('#main_page').html(view.render().el);
	},
	
	browseReasons: function(t_id, r_id) {
		var view = new MobileBb.Views.BrowseTaskActivitiesBrowseReasons({
			topic: this.topics.where({id: parseInt(t_id)})[0],
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			b_t_acts: this.browse_task_activities,
			reasons: this.reasons,
			sources: this.sources.where({reason_id: parseInt(r_id)}),
			reason: this.reasons.where({id: parseInt(r_id)})[0]
		});
		$('#main_page').html(view.render().el);
	},
	
	topicQuizTask: function(task_id, t_id) {
		var view = new MobileBb.Views.QuizTasksTopic({
			topic: this.topics.where({id: parseInt(t_id)})[0],
			current_user: this.current_user,
			quiz_task_activities: this.quiz_task_activities,
			quiz_qs: this.quiz_qs
		});
		$('#main_page').html(view.render().el);
	},
	
	quizQuestions: function(t_id, q_id) {
		var view = new MobileBb.Views.QuizTaskActivitiesQuizQuestions({
			topic:this.topics.where({id: parseInt(t_id)})[0],
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			q_t_acts: this.quiz_task_activities,
			quiz_qs: this.quiz_qs,
			source: this.sources.where({id: this.quiz_qs.where({id: parseInt(q_id)})[0].get("source_id")})[0],
			quiz_q: this.quiz_qs.where({id: parseInt(q_id)})[0]
		});
		$('#main_page').html(view.render().el);
	},
	
	quizCorrect: function(q_id) {
		var view = new MobileBb.Views.QuizTaskActivitiesQuizCorrect({
			quiz_q: this.quiz_qs.where({id: parseInt(q_id)})[0],
			quiz_qs: this.quiz_qs,
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			q_t_acts: this.quiz_task_activities,
			topic: this.topics.where({id: this.quiz_qs.where({id: parseInt(q_id)})[0].get("t_id")})[0]
		});
		$('#main_page').html(view.render().el);
	},
	
	quizWrong: function(q_id) {
		var view = new MobileBb.Views.QuizTaskActivitiesQuizWrong({
			quiz_q: this.quiz_qs.where({id: parseInt(q_id)})[0],
			quiz_qs: this.quiz_qs,
			current_user: this.users.where({id: this.current_user.get("id")})[0],
			q_t_acts: this.quiz_task_activities,
			topic: this.topics.where({id: this.quiz_qs.where({id: parseInt(q_id)})[0].get("t_id")})[0]
		});
		$('#main_page').html(view.render().el);
	}
});
