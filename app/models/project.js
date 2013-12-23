var attr = DS.attr;

export default DS.Model.extend({
    title: attr(),
    created: attr('date')
});
