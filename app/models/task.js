import DS from 'ember-data';

var Task = DS.Model.extend({
  title: DS.attr('string'),
  added: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  duration: DS.attr('number', {
    defaultValue: 0
  }),
  submitted: DS.attr('boolean', {
    defaultValue: 0
  }),
  project: DS.belongsTo('project')
});

export default Task;
