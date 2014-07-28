

var PlanetsModel = Backbone.Model.extend({
  defaults: {
    name: '',
    imgUrl: ''
  }
});

var mars = new PlanetsModel({name: "Mars",
imgUrl: "http://i.imgur.com/ptzox8q.jpg"});
var jupiter = new PlanetsModel({name: "Jupiter",
imgUrl: "http://i.imgur.com/IULkCb8.jpg"});
var uranus = new PlanetsModel({name: "Uranus",
imgUrl: "http://i.imgur.com/LA1RyyX.jpg"});
var saturn = new PlanetsModel({name: "Saturn",
imgUrl: "http://i.imgur.com/23ya4dd.jpg"});
var venus = new PlanetsModel({name: "Venus",
imgUrl: "http://i.imgur.com/Kqlp3hV.jpg"});
var mercury = new PlanetsModel({name: "Mercury",
imgUrl: "http://i.imgur.com/8151u9d.jpg"});

var PlanetsCollection = Backbone.Collection.extend({
  model: PlanetsModel
});

var planetsCollection = new PlanetsCollection([mars,jupiter,uranus,saturn,venus,mercury]);


var PlanetsView = Backbone.View.extend({
  tagName: 'li',
  planetTemplate: _.template($('#template-target').text()),
  initialize: function(){
    this.collection = new PlanetsCollection([mars,jupiter,uranus,saturn,venus,mercury]);
  },
  render: function(){
    this.$el.html(this.planetTemplate(this.model.toJSON()));
  }
});

var planetsView = new PlanetsView();









// var Planet = Backbone.Model.extend({
//   defaults:{
//     name: '',
//     bio: '',
//     imgUrl: ''
//   }
// });
//
// PlanetView = Backbone.View.extend({
//   tagName: 'li', // listing what tag the rendered data will be put into the HTML with.
//   initialize: function(){ // using this function as soon as the View is initialized.
//     this.render(); // rendering the data as soon as the View is initialized.
//   },
//   render: function(){
//     this.$el.html(this.model.get('name'), this.model.get('age'), this.model.get('occupation'));
//   }
// });
//













// var Planets = Backbone.Collection.extend({
//   model: Planet,
//   localstorage: new Backbone.LocalStorage('stuff')
// });
//
// var Planet = Backbone.Model.extend({
//   urlRoot: '/planets'
// });
//
// var mars = new Planet({'name': 'Mars','bio':'red planet','imgUrl': "http://i.imgur.com/ptzox8q.jpg"});
// var jupiter = new Planet({'name': 'Jupiter','bio': 'big blue planet','imgUrl': 'http://i.imgur.com/IULkCb8.jpg'});
// var uranus = new Planet({'name': 'Uranus','bio': 'funny name','imgUrl': "http://i.imgur.com/LA1RyyX.jpg"});
// var saturn = new Planet({'name': 'Saturn','bio':'burning planet','imgUrl': 'http://i.imgur.com/23ya4dd.jpg'});
// var venus = new Planet({'name': 'Venus','bio':'shaving name','imgUrl':"http://i.imgur.com/Kqlp3hV.jpg"});
// var mercury = new Planet({'name':"Mercury",'bio':'blue planet','imgUrl': "http://i.imgur.com/8151u9d.jpg"});
//
// var planets = new Planets([mars,jupiter,uranus,saturn,venus,mercury]);
//
// var PlanetList = Backbone.View.extend({
//   el: 'body',
//   template: _.template($('#template-target').html()),
//   render: function(){
//     this.$el.html(this.template(this.model.toJSON()));
//     return this;
//   },
//   initialize: function(options){
//     this.planets = options.planets;
//     this.planets.bind('reset',this.addAll,this);
//   },
//   addAll: function(){
//     this.$el.find('body').children().remove();
//     _.each(this.planets.models, $.proxy(this,'addOne'));
//   },
//   addOne:function(planet){
//     var view = new PlanetDetail({
//       planets: this.planets,
//       planet: planet
//     });
//     this.$el.find('body').append(view.render().el);
//   }
// });
//
// var PlanetDetail = Backbone.View.extend({
//   el: 'div',
//   initialize: function(){
//     var planetList = new PlanetList();
//   },
//   render: function(){
//     this.render();
//   }
// });


//
// $(document).ready(function(){
//   var Router = Backbone.Router.extend({
//     routes:{
//       '': 'home',
//       '/:id': 'planetDisplay'
//     }
//   });
//
//   var router = new Router();
//   router.on("route:home",function(){
//     Planets.render();
//   });
//   router.on("route:planetDisplay",function(){
//     planets.render();
//   });
//   Backbone.history.start();
// });
