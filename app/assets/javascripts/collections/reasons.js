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
	}
});
