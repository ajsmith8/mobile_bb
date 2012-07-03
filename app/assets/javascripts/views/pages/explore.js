MobileBb.Views.PagesExplore = Backbone.View.extend({
	
	template: JST['pages/explore'],
	
	events: {
		'click #back' : 'back',
		'click #task' : 'goToTask'
	},
	
	render: function() {
		var final_array = [];
		this.setTasks(final_array);
		this.options.array = final_array;
		$(this.el).html(this.template({
			array: this.options.array,
			b_t_acts: this.options.browse_task_activities,
			q_t_acts: this.options.quiz_task_activities,
			current_user: this.options.current_user
		}));
		return this;
	},
	
	back: function() {
		parent.history.back();
	},
	
	getTaskTypes: function(array) {
		var current_user = this.options.current_user;
		this.options.browse_tasks.each(function(t) {
			if (t.get("lvl_req") <= current_user.get("level") && !(t.get("parent_id"))) {
				array.push(t);
			}
		});
		this.options.quiz_tasks.each(function(t) {
			if (t.get("lvl_req") <= current_user.get("level") && !(t.get("parent_id"))) {
				array.push(t);
			}
		});
	},
	
	setTasks: function(f_array) {
		var task_array = [];
		var b_array = [];
		var q_array = [];
		var count, q_loc, b_loc, max, count_max;
		this.getTaskTypes(task_array);
		if (task_array.length === 1) {
			this.browseFilter(b_array);
			if (b_array.length < 5) {
				max = b_array.length;
			} else {
				max = 5;
			}
			for (i = 0; i < max; i++) {
				f_array.push({task: task_array[0], topic: b_array[i].topic, score: b_array[i].score});
			}
		} else {
			this.browseFilter(b_array);
			this.quizFilter(q_array);
			if (q_array.length + b_array.length < 5) {
				max = q_array.length + b_array.length;
			} else {
				max = 5;
			}
			if (b_array.length < 3) {
				count_max = 5 - b_array.length;
			} else {
				count_max = 2;
			}
			count = 0;
			q_loc = 0;
			b_loc = 0;
			for (i = 0; i < max; i++) {	
				if (i < q_array.length && count < count_max) {
					f_array.push({task: task_array[1], topic: q_array[q_loc].topic, score: q_array[q_loc].score});
					q_loc = q_loc + 1;
					count = count + 1;
				} else {
					f_array.push({task :task_array[0], topic: b_array[b_loc].topic, score: b_array[b_loc].score});
					b_loc = b_loc + 1;
					count = count + 1;
				}
			}
		}
		f_array.sort(function(a,b) {
			return b.score - a.score;
		});
	},
	
	topicFilter: function(array) {
		var user_affinity, topic_value, user_total, score, current_user, categories;
		current_user = this.options.current_user;
		categories = this.options.categories;
		user_total = 0;
		categories.each(function(c) {
			user_total = user_total + current_user.get(c.get("name").toLowerCase().replace(" ", "_"));
		});
		this.options.topics.each(function(t) {
			user_affinity = 0;
			topic_value = t.get("reasons_approved") * t.get("score");
			categories.each(function(c) {
				var user_percent, topic_percent, user_value;
				user_value = current_user.get(c.get("name").toLowerCase().replace(" ", "_"));
				user_percent = user_value / user_total;
				topic_percent = t.get(c.get("name").toLowerCase().replace(" ", "_")) / 100;
				user_affinity = user_affinity + user_percent * topic_percent;
			});
			score = topic_value * user_affinity;
			array.push({topic: t, score: score});
		});
		array.sort(function(a,b) {
			return b.score - a.score;
		});
	},
	
	browseFilter: function(b_array) {
		var t_array = [];
		var current_user = this.options.current_user;
		var browse_task_activities = this.options.browse_task_activities;
		this.topicFilter(t_array);
		for(i = 0; i < t_array.length; i++) {
			if (!(browse_task_activities.where({
					reference_id: t_array[i].topic.get("id"), 
					task_id: 1,
					t_id: t_array[i].topic.get("id"),
					user_id: current_user.get("id")})[0])) {
				b_array.push(t_array[i]);	
			}
		}
	},
	
	quizFilter: function(q_array) {
		var t_array = [];
		var current_user = this.options.current_user;
		var browse_task_activities = this.options.browse_task_activities;
		var quiz_task_activities = this.options.quiz_task_activities;
		this.topicFilter(t_array);
		for(i = 0; i < t_array.length; i++) {
			if (!(quiz_task_activities.where({
					model_name: "topic", reference_id: t_array[i].topic.get("id"), user_id: current_user.get("id")})[0])) {
				q_array.push(t_array[i]);
			}
		}
	},
	
	goToTask: function() {
		var array = this.options.array[$(event.target).val()];
		Backbone.history.navigate(array.task.url() + '/' + array.topic.get("id"), true);
	}
});