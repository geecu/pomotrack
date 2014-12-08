import DS from 'ember-data';

var Client = DS.Model.extend({
  name: DS.attr('string'),
  added: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  projects: DS.hasMany('project', {
    async: true
  })
});

export default Client;
