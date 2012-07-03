MobileBb.Views.AdminShowR = Backbone.View.extend({

	template: JST['admin/show_r'],
	
	events: {
		'click #edit_reason' 	: 'editR',
		'click #reason' 		: 'editR', 
		'click #source' 		: 'showSource',
		'submit #new_source'	: 'newSource',
		'click #plus' 			: 'plusScore',
		'click #minus' 			: 'minusScore',
		'click #to_main'		: 'toMain',
		'click #to_topic_show'	: 'toTopicShow'
	},
	
	render: function() {
		$(this.el).html(this.template({
			reason: this.options.reason,
			sources: this.options.sources
		}));
		return this;
	},
	
	initialize: function() {
		this.options.sources.on('add', this.render, this);
		this.options.sources.on('reset', this.render, this);
		this.options.sources.on('change', this.render, this);
	},
	
	editR: function() {
		Backbone.history.navigate('admin/reasons/' + $('#edit_reason').val() + '/edit', true);
	},
	
	newSource: function() {
		event.preventDefault();
		this.options.sources.create({
			description: $('#description').val(),
			reason_id: this.options.reason.get("id"),
			t_id: this.options.reason.get("t_id"),
			url: $('#url').val()}, 
			{wait: true});
	},
	
	showSource: function() {
		Backbone.history.navigate('admin/sources/' + $(event.target).val(), true);
	},
	
	plusScore: function() {
		var source, id;
		id = parseInt($(event.target).val());
		source = this.options.sources.where({id: id})[0];
		this.options.sources.plusScore(source);
	},
	
	minusScore: function() {
		var source, id;
		id = parseInt($(event.target).val());
		source = this.options.sources.where({id: id})[0];
		this.options.sources.minusScore(source);
	},
	
	toMain: function() {
		Backbone.history.navigate('admin', true);
	},
	
	toTopicShow: function() {
		Backbone.history.navigate('admin/ts/' + this.options.reason.get("t_id"), true);
	}
});