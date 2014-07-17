var PlanetList = Backbone.View.extend({
  tagName: '',
  template: _.template($('#template-target').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    this.render();
  }
});

var PlanetDetail = Backbone.View.extend({
  el: 'div',
  initialize: function(){
    var planetList = new PlanetList();
  },
  render: function(){

  }
});

var Planets = Backbone.Collection.extend({
  model: Planet
});

var Planet = Backbone.Model.extend({
  urlRoot: '/planets',
defaults:{
  name: '',
  Url: '',
  imgUrl: ''
}
});

var Router = Backbone.Router.extend({
  routes:{
    '': 'home',
    '/:id': 'planetDisplay'
  }
});

var router = new Router();
router.on("route:home",function(){
  Planets.render();
});
router.on("route:planetDisplay",function(){
  planets.render();
});

Backbone.history.start();
