MobileBb.Views.PagesMain = Backbone.View.extend({
	
	template: JST['pages/main'],
	
	events: {
		'click #menu' : 'menu',
		'click #explore' : 'explore',
		'click #timer' : 'timer',
		'click #correct' : 'correct',
		'click #wrong' : 'wrong'
	},
	
	render: function() {
		$(this.el).html(this.template({
			
		}));
		return this;
	},
	
	menu: function() {
		Backbone.history.navigate('menu', true);
	},
	
	explore: function() {
		Backbone.history.navigate('explore', true);
	},
	
	timer: function() {
		var mine = this;
		$(document).ready(function(){
		    var ex1running = false;
		    var ex2running = false;

		    $('#meter-ex1').ready(function(){ 
			  if(!ex1running){
		        ex1running = true;
		        var $this = $(this);
		        var count = 100;
		        var inter = null;
				var points = 1000
		        function run(){
					count = count - 1;
		            points = points - 10;
		            $this.find('.meter-value').css('width', count+"%");
					$this.find('.meter-bar').css('width', count+"%");
		            $this.find('.meter-text').text(points/100);
					if (mine.stopTimer()) {
		                clearInterval(inter);
						ex1running = false;
						mine.user_time = 10 - (points / 100);
						mine.alertStatus();
		       		}
		        }
				inter = setInterval(run, 100);
			}
		});

		});
	},
	
	stopTimer: function(count) {
		if (count === 0 || this.answered) {
			return true;
		} else {
			return false;
		}
	},
	
	correct: function() {
		this.answered = true;
		this.correct = true;
	},
	
	wrong: function() {
		this.answered = true;
		this.correct = false;
	},
	
	alertStatus: function() {
		if (this.correct) {
			alert("you got it right in " + Math.round(this.user_time * 10) / 10 + " seconds");
		} else {
			alert("it only took you " + Math.round(this.user_time * 10) / 10 + " seconds but you still failed");
		}
	}	
});