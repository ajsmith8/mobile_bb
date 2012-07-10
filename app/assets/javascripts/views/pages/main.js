MobileBb.Views.PagesMain = Backbone.View.extend({
	
	template: JST['pages/main'],
	
	events: {
		'click #menu' : 'menu',
		'click #explore' : 'explore',
		'click #timer' : 'timer',
		'click #correct' : 'correct',
		'click #wrong' : 'wrong',
		'click #reset' : 'reset'
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
		var time = $(event.target);
		var meter = $(event.target).prev();
		var mine = this;
		$(document).ready(function(){
		    var ex1running = false;
		    var ex2running = false;
		
		    $(this).ready(function(){ 
			  if(!ex1running){
		        ex1running = true;
		        var count = 100;
		        var inter = null;
				var points = 1000
		        function run(){
					if (mine.stopTimer(count)) {
		                clearInterval(inter);
						ex1running = false;
						mine.user_time = 10 - (points / 100);
						mine.alertStatus();
						return;
		       		}
					count = count - 1;
		            points = points - 10;
					meter.css('width', count+"%");
		            time.text(points/100);
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
		$('#meter').addClass('meter-bar-fail');
		$('#meter').addClass('meter-bar');
	},
	
	alertStatus: function() {
		$('#meter').css('width', "100%");
		if (this.correct) {
			alert("you got it right in " + Math.round(this.user_time * 10) / 10 + " seconds");
		} else {
			alert("it only took you " + Math.round(this.user_time * 10) / 10 + " seconds but you still failed");
		}
	},
	
	reset: function() {
		this.answered = false;
		this.render();
	},
	
	myTimer: function() {
		var inter;
		var running = false;
		var count;
		var time;
		if (!running) { 
			running = true;
			count = 10;
			time = 5;
			function run() {
				count = count - 1;
				time = time - 0.5;
				$('#timing').css('width', count * 10 + "%");
				$('#my-time').text(time + " s");
				if (count === 0) {
					clearInterval(inter);
					running = false;
				}
			}
			inter = setInterval(run, 500);		
		}
	}
});