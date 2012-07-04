MobileBb.Views.QuizTaskActivitiesQuizQuestions = Backbone.View.extend({
	
	template: JST['quiz_task_activities/quiz_questions'],
	
	events: {
		'click #menu' 		: 'menu',
		'click #explore' 	: 'explore',
		'click #learn_more' : 'learnMore',
		'click #answer'		: 'answer'
	},
	
	render: function() {
		this.shuffleAnswers();
		$(this.el).html(this.template({
			quiz_q: this.options.quiz_q,
			source: this.options.source,
			answers: this.answers
		}));
		return this;
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	},
	
	learnMore: function() {
		if ($('#source').is(':visible')) {
			$('#source').hide();
		} else {
			$('#source').show();
		}
	},
	
	answer: function() {
		if (this.answers[parseInt($(event.target).val())] === this.options.quiz_q.get("correct")) {
			this.correct();
		} else {
			this.wrong();
		}
	},
	
	correct: function() {
		this.options.q_t_acts.create({
						user_id: this.options.current_user.get("id"), 
						task_id: 2, 
						t_id: this.options.topic.get("id"), 
						reference_id: this.options.quiz_q.get("id"), 
						data: "true"});
		if (this.options.q_t_acts.where({
						user_id: this.options.current_user.get("id"), 
						task_id: 2, 
						t_id: this.options.topic.get("id")}).length 
										=== 
						this.options.quiz_qs.where({t_id: this.options.topic.get("id"), is_approved: true}).length) {
			this.options.q_t_acts.create({
							user_id: this.options.current_user.get("id"), 
							task_id: 1, 
							t_id: this.options.topic.get("id"), 
							reference_id: this.options.topic.get("id")});
		}
		Backbone.history.navigate('question/' + this.options.quiz_q.get("id") + '/correct', true);
	},
	
	wrong: function() {
		this.options.q_t_acts.create({
						user_id: this.options.current_user.get("id"), 
						task_id: 2, 
						t_id: this.options.topic.get("id"), 
						reference_id: this.options.quiz_q.get("id"), 
						data: "false"});
		if (this.options.q_t_acts.where({
						user_id: this.options.current_user.get("id"), 
						task_id: 2, 
						t_id: this.options.topic.get("id")}).length 
										=== 
						this.options.quiz_qs.where({t_id: this.options.topic.get("id"), is_approved: true}).length) {
			this.options.q_t_acts.create({
							user_id: this.options.current_user.get("id"), 
							task_id: 1, 
							t_id: this.options.topic.get("id"), 
							reference_id: this.options.topic.get("id")});
		}
		Backbone.history.navigate('question/' + this.options.quiz_q.get("id") + '/wrong', true);
	},
	
	shuffleAnswers: function() {
		var array = [];
		var quiz_q = this.options.quiz_q;

		array.push(quiz_q.get("correct"));
		array.push(quiz_q.get("wrong1"));
		if (quiz_q.get("wrong2") && quiz_q.get("wrong2") !== "") {
			array.push(quiz_q.get("wrong2"));
		}
		if (quiz_q.get("wrong3") && quiz_q.get("wrong3") !== "") {
			array.push(quiz_q.get("wrong3"));
		}
		if (quiz_q.get("wrong4") && quiz_q.get("wrong4") !== "") {
			array.push(quiz_q.get("wrong4"));
		}
		array = _.shuffle(array);
		this.answers = array;
	}
});