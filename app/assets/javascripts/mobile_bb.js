window.MobileBb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(data) {
	this.current_user = new MobileBb.Models.User(data.current_user);
	this.users = new MobileBb.Collections.Users(data.users);
	this.topics = new MobileBb.Collections.Ts(data.topics);
	this.reasons = new MobileBb.Collections.Reasons(data.reasons);
	this.sources = new MobileBb.Collections.Sources(data.sources);
	this.quiz_qs = new MobileBb.Collections.QuizQs(data.quiz_qs);
	this.categories = new MobileBb.Collections.Categories(data.categories);
	this.tasks = new MobileBb.Collections.Tasks(data.tasks);
	this.task_activities = new MobileBb.Collections.TaskActivities(data.task_activities);
	this.browse_tasks = new MobileBb.Collections.BrowseTasks(data.browse_tasks);
	this.browse_task_activities = new MobileBb.Collections.BrowseTaskActivities(data.browse_task_activities);
	this.quiz_tasks = new MobileBb.Collections.QuizTasks(data.quiz_tasks);
	this.quiz_task_activities = new MobileBb.Collections.QuizTaskActivities(data.quiz_task_activities);
	
	
	new MobileBb.Routers.Router({
		current_user: this.current_user,
		users: this.users,
		topics: this.topics,
		reasons: this.reasons,
		sources: this.sources,
		quiz_qs: this.quiz_qs,
		categories: this.categories,
		tasks: this.tasks,
		task_activities: this.task_activities,
		browse_tasks: this.browse_tasks,
		browse_task_activities: this.browse_task_activities,
		quiz_tasks: this.quiz_tasks,
		quiz_task_activities: this.quiz_task_activities
	});
	new MobileBb.Routers.AdminRouter({
		current_user: this.current_user,
		topics: this.topics,
		reasons: this.reasons,
		sources: this.sources,
		quiz_qs: this.quiz_qs,
		categories: this.categories,
	});
	Backbone.history.start();
  }
};