MobileBb.Views.PagesHome = Backbone.View.extend({

	template: JST['pages/home'],
	
	events: {
		'click #next' : 'next',
		'click #friends' : 'getFriends',
		'click #feed-post' : 'feedPost',
		'click #sharePost' : 'sharePost'
	},
	
	render: function() {
		$(this.el).html(this.template());
		return this;
	},
	
	next: function() {
		Backbone.history.navigate('categories', true);
	},
	
	getFriends: function() {
		var friends;
		FB.api('/me/friends?access_token=' + this.options.current_user.get("token"), function(response) {
		    friends = response["data"];
			$('#friend-loc').html(JST['pages/friends']({friends: friends}));
		});
	},
	
	feedPost: function() {
        var obj = { method: 'feed', link: 'http://www.fusegap.com', name: 'fuseGap', caption: 'Reference Documentation', description: 'Testing shit.'};
		function callback(response) 
		{
       		document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }
		FB.ui(obj, callback);
	},
	
	sharePost: function() {
		var id = $(event.target).val();
		var me = this.options.current_user.get("uid");
		var obj = { method: 'feed', link: 'http://www.fusegap.com', name: 'fuseGap', caption: 'Reference Documentation', description: 'Testing shit.', to: id, from: me};
		function callback(response) 
		{
       		document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }
		FB.ui(obj, callback);
	}
});