MobileBb.Views.AdminShowT = Backbone.View.extend({

	template: JST['admin/show_t'],
	
	events: {
		'click #edit_topic' 	: 'editT',
		'click #topic' 			: 'editT', 
		'submit #new_pro' 		: 'newPro',
		'submit #new_con' 		: 'newCon',
		'click #reason' 		: 'showReason',
		'click #plus' 			: 'plusScore',
		'click #minus' 			: 'minusScore',
		'click #to_main'		: "toMain" 
	},
	
	render: function() {
		$(this.el).html(this.template({
			topic: this.options.topic,
			reasons: this.options.reasons
		}));
		return this;
	},
	
	initialize: function() {
		this.options.reasons.on('reset', this.render, this);
		this.options.reasons.on('add', this.render, this);
	},
	
	editT: function() {
		Backbone.history.navigate('admin/ts/' + $('#edit_topic').val() + '/edit', true);
	},
	
	newPro: function() {
		event.preventDefault();
		this.options.reasons.create({
			title: $('#new_pro_title').val(), 
			is_pro: true, 
			t_id: this.options.topic.get("id")}, 
			{wait: true});
	},
	
	newCon: function() {
		event.preventDefault();
		this.options.reasons.create({
			title: $('#new_con_title').val(), 
			is_pro: false, 
			t_id: this.options.topic.get("id")}, 
			{wait: true});
	},
	
	showReason: function() {
		Backbone.history.navigate('admin/reasons/' + $(event.target).val(), true);
	},
	
	plusScore: function() {
		var reason, id;
		id = parseInt($(event.target).val());
		reason = this.options.reasons.where({id: id})[0];
		this.options.reasons.plusScore(reason);
	},
	
	minusScore: function() {
		var reason, id;
		id = parseInt($(event.target).val());
		reason = this.options.reasons.where({id: id})[0];
		this.options.reasons.minusScore(reason);
	},
	
	toMain: function() {
		Backbone.history.navigate('admin', true);
	}
});
