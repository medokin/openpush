var App;

module("Acceptances - Helper - Human Time", {
    setup: function(){
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test("helper output is rendered", function(){
    expect(1);

    visit('/helpers-human-time-test').then(function(){
        ok(exists("#result1:contains('seconds ago')"));
    });
});
