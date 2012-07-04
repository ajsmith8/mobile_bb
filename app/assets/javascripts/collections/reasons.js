MobileBb.Collections.Reasons = Backbone.Collection.extend({

	model: MobileBb.Models.Reason,
	url: 'reasons',
	
	comparator: function(reason) {
		return - reason.get("score");
	},
	
	plusScore: function (reason) {
		reason.set({score: reason.get("score") + 1});
		reason.save();
		this.sort();
	},
	
	minusScore: function (reason) {
		reason.set({score: reason.get("score") - 1});
		reason.save();
		this.sort();
	},
	
	isTopicDone: function(b_t_acts, topic, current_user) {
		if (b_t_acts.where({task_id: 1, t_id: topic.get("id"), user_id: current_user.get("id"), reference_id: topic.get("id")})[0]) {
			Backbone.history.navigate('main', true);
		} else {
			this.findReason(b_t_acts, topic, current_user);
			Backbone.history.navigate('browse_reasons/' + topic.get("id") + '/' + this.reason.get("id"), true);
		}
	},
	
	findReason: function(b_t_acts, topic, current_user) {
		var r_array = [], reason;
		var reasons = this.where({t_id: topic.get("id"), is_approved: true});
		var count = 0, r_selected = false;
		
		this.arrangeProCon(r_array, topic);
		while (count < r_array.length && !r_selected) {
			if (!(b_t_acts.where({user_id: current_user.get("id"), task_id: 2, reference_id: r_array[count].get("id")})[0])) {
				reason = r_array[count];
				r_selected = true;
			}
			count = count + 1;
		}
		this.reason = reason;
		b_t_acts.create({task_id: 2, t_id: reason.get("t_id"), user_id: current_user.get("id"), reference_id: reason.get("id")});
		if (b_t_acts.where({user_id: current_user.get("id"), task_id: 2, t_id: topic.get("id")}).length === topic.get("reasons_approved")) {
				b_t_acts.create({task_id: 1, t_id: topic.get("id"), user_id: current_user.get("id"), reference_id: topic.get("id")});
				current_user.set({level: 1});
				current_user.save();
		} 
	},
	
	arrangeProCon: function(array, topic) {
		var pros = [], cons = [];
		var reasons = this.where({t_id: topic.get("id"), is_approved: true});
		
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
	}
});
