MobileBb.Views.BrowseTaskActivitiesBrowseReasons = Backbone.View.extend({
	
	template: JST['browse_task_activities/browse_reasons'],
	
	events: {
		'click #next' 		: 'isTopicDone',
		'click #menu' 		: 'menu',
		'click #explore' 	: 'explore'
	},
	
	render: function() {
		$(this.el).html(this.template({
			reason: this.reason,
			sources: this.sources
		}));
		return this;
	},
	
	initialize: function() {
		this.options.browse_task_activities.on('reset', this.render, this);
		this.options.browse_task_activities.on('add', this.render, this);
	},
	
	isTopicDone: function() {
		if (this.options.browse_task_activities.where({
							user_id: this.options.current_user.get("id"), 
							task_id: 2, 
							t_id: this.options.topic.get("id")}).length 
						=== this.options.topic.get("reasons_approved")) {
			this.options.browse_task_activities.create({
					task_id: 1,
					t_id: this.options.topic.get("id"), 
					user_id: this.options.current_user.get("id"), 
					reference_id: this.options.topic.get("id")});
			this.options.current_user.set({level: 1});
			this.options.current_user.save();
			Backbone.history.navigate('main', true);
		} else {
			this.findReason();
		}
	},
	
	findReason: function() {
		var r_array = [], reason;
		var reasons = this.options.reasons.where({t_id: this.options.topic.get("id"), is_approved: true});
		var count = 0, r_selected = false;
		
		this.arrangeProCon(r_array);
		while (count < r_array.length && !r_selected) {
			if (!(this.options.browse_task_activities.where({
							user_id: this.options.current_user.get("id"), 
							task_id: 2, 
							reference_id: r_array[count].get("id")})[0])) {
				reason = r_array[count];
				r_selected = true;
			}
			count = count + 1;
		}
		this.sources = this.options.sources.where({reason_id: reason.get("id")});
		this.options.browse_task_activities.create({
				task_id: 2,
				t_id: reason.get("t_id"), 
				user_id: this.options.current_user.get("id"), 
				reference_id: reason.get("id")});
		this.reason = reason;
	},
	
	arrangeProCon: function(array) {
		var pros = [], cons = [];
		var reasons = this.options.reasons.where({t_id: this.options.topic.get("id"), is_approved: true});
		
		for (i = 0; i < reasons.length; i++) {
			if (reasons[i].get("is_pro")) {
				pros.push(reasons[i]);
			} else {
				cons.push(reasons[i]);
			}
		}
		pros.sort(function(a,b) {
			return b.get("score") - a.get("score");
		});
		cons.sort(function(a,b) {
			return b.get("score") - a.get("score");
		});
	
		if (pros.length >= cons.length) {
			for(i = 0; i < pros.length; i++) {
				if(pros[i]) {
					array.push(pros[i]);
				}
				if(cons[i]) {
					array.push(cons[i]);
				}
			}
		} else {
			for(i = 0; i < cons.length; i++) {
				if(pros[i]) {
					array.push(pros[i]);
				}
				if(cons[i]) {
					array.push(cons[i]);
				}
			}
		}	
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	}
});