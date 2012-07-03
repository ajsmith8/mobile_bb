MobileBb.Collections.Sources = Backbone.Collection.extend({
	model: MobileBb.Models.Source,
	url: 'sources',
	
	comparator: function(source) {
		return - source.get("score");
	},
	
	plusScore: function (source) {
		source.set({score: source.get("score") + 1});
		source.save();
		this.sort();
	},
	
	minusScore: function (source) {
		source.set({score: source.get("score") - 1});
		source.save();
		this.sort();
	}
});
