import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  added: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  active: DS.attr('boolean'),
  tasks: DS.hasMany('task', {
    async: true
  }),
  client: DS.belongsTo('client')
});

export default Project;
