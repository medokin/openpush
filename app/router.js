var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('helpers-human-time-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });

  this.resource('projects', function(){

  });
});

export default Router;
