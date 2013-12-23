var ProjectsIndexRoute = Ember.Route.extend({
    model: function(){
        console.log('model')
        return this.store.find('project');
    }
});

export default ProjectsIndexRoute;
