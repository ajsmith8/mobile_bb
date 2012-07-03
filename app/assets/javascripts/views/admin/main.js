MobileBb.Views.AdminMain = Backbone.View.extend({

	template: JST['admin/main'],
	
	events: {
		'submit #new_t' : 'newT',
		'click #topic' 	: 'editT',
		'click #plus' 	: 'plusScore',
		'click #minus' 	: 'minusScore'
	},
	
	render: function() {
		$(this.el).html(this.template({
			topics: this.options.topics
		}));
		return this;
	},
	
	initialize: function() {
		this.options.topics.on('reset', this.render, this);
		this.options.topics.on('add', this.render, this);
	},
	
	newT: function() {
		event.preventDefault();
		this.options.topics.create({title: $('#new_t_title').val()}, {wait: true});
	},
	
	editT: function() {
		Backbone.history.navigate('admin/ts/' + $(event.target).val(), true);
	},
	
	plusScore: function() {
		var topic, id;
		id = parseInt($(event.target).val());
		topic = this.options.topics.where({id: id})[0];
		this.options.topics.plusScore(topic);
	},
	
	minusScore: function() {
		var topic, id;
		id = parseInt($(event.target).val());
		topic = this.options.topics.where({id: id})[0];
		this.options.topics.minusScore(topic);
	}
});
