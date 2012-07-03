MobileBb.Views.AdminShowS = Backbone.View.extend({

	template: JST['admin/show_s'],
	
	events: {
		'submit #new_quiz_q' 	: 'newQuizQ',
		'click #edit_source' 	: 'editS',
		'click #source' 		: 'editS',
		'click #quiz_q' 		: 'editQuizQ',
		'click #plus' 			: 'plusScore',
		'click #minus' 			: 'minusScore',
		'click #to_main'		: 'toMain',
		'click #to_topic_show'	: 'toTopicShow',
		'click #to_reason_show' : 'toReasonShow'
	},
	
	render: function() {
		$(this.el).html(this.template({
			source: this.options.source,
			quiz_qs: this.options.quiz_qs
		}));
		return this;
	},
	
	initialize: function() {
		this.options.quiz_qs.on('reset', this.render, this);
		this.options.quiz_qs.on('add', this.render, this);
		this.options.quiz_qs.on('change', this.render, this);
	},
	
	newQuizQ: function() {
		event.preventDefault();
		this.options.quiz_qs.create({
			question: $('#question').val(), 
			correct: $('#correct').val(),
			wrong1: $('#wrong1').val(),
			wrong2: $('#wrong2').val(),
			wrong3: $('#wrong3').val(),
			wrong4: $('#wrong4').val(),
			source_id: this.options.source.get("id"), 
			t_id: this.options.source.get("t_id")}, 
			{wait: true});
	},
	
	editS: function() {
		Backbone.history.navigate('admin/sources/' + $('#edit_source').val() + '/edit', true);
	},
	
	editQuizQ: function() {
		Backbone.history.navigate('admin/quiz_qs/' + $(event.target).val() + '/edit', true);
	},
	
	plusScore: function() {
		var quiz_q, id;
		id = parseInt($(event.target).val());
		quiz_q = this.options.quiz_qs.where({id: id})[0];
		this.options.quiz_qs.plusScore(quiz_q);
	},
	
	minusScore: function() {
		var quiz_q, id;
		id = parseInt($(event.target).val());
		quiz_q = this.options.quiz_qs.where({id: id})[0];
		this.options.quiz_qs.minusScore(quiz_q);
	},
	
	toMain: function() {
		Backbone.history.navigate('admin', true);
	},
	
	toTopicShow: function() {
		Backbone.history.navigate('admin/ts/' + this.options.source.get("t_id"), true);
	},
	
	toReasonShow: function() {
		Backbone.history.navigate('admin/reasons/' + this.options.source.get("reason_id"), true);
	}
});