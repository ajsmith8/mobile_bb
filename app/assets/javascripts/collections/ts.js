MobileBb.Collections.Ts = Backbone.Collection.extend({

	model: MobileBb.Models.T,
	url: 'ts',
	
	comparator: function(topic) {
		return - topic.get("score");
	},
	
	plusScore: function (topic) {
		topic.set({score: topic.get("score") + 1});
		topic.save();
		this.sort();
	},
	
	minusScore: function (topic) {
		topic.set({score: topic.get("score") - 1});
		topic.save();
		this.sort();
	}
});
