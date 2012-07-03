MobileBb.Views.AdminEditQuizQ = Backbone.View.extend({

	template: JST['admin/edit_quiz_q'],
	
	events: {
		'submit #quiz_q' : 'updateQuizQ'
	},
	
	render: function() {
		$(this.el).html(this.template({
			quiz_q: this.options.quiz_q
		}));
		return this;
	},
	
	updateQuizQ: function() {
		event.preventDefault();
		this.options.quiz_q.set({
			question: $('#question').val(),
			correct: $('#correct').val(),
			wrong1: $('#wrong1').val(),
			wrong2: $('#wrong2').val(),
			wrong3: $('#wrong3').val(),
			wrong4: $('#wrong4').val()
		});
		this.options.quiz_q.save();
		Backbone.history.navigate('admin/' + 
					this.options.quiz_q.get("t_id") + 
					'/sources/'+ 
					this.options.quiz_q.get("source_id"), true);
	}
});