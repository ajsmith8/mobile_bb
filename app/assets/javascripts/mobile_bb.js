window.MobileBb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(data) {
	new MobileBb.Routers.Router();
	Backbone.history.start();
  }
};