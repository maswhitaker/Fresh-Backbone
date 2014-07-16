var Planet = Backbone.Model.extend({
  attributes: '_id',
  defaults: {
    name: '',
    info: '',
    years-old: '',
    imgUrl: ''
  }
});

var planet = new Planet();

var Universe = Backbone.Collection.extend({
  model: Planet
});

var universe = new Universe();

var PlanetView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#planet-template').html()),
  render: function(){
      this.$el.html(this.template(this.model.toJSON()));
  }
});

var UniverseView = Backbone.View.extend({
  el: "#planetApp",
  initialize: function(){
    this.input = this.$("#new-planet");
    
  },
  render: function(){

  },
  events: {
    'click .planet': 'displayPlanet'
  }
});

var PlanetRouter = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'friends/': 'universePage',
    'friends/id': 'planetPage'
  },
  universePage: function(){
    var universePage = new UniverseView();
  },
  planetPage: function(){
    var planetPage = new PlanetView();
  }
});
