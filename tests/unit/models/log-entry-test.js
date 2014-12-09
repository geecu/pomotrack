import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('log-entry', 'LogEntry', {
  // Specify the other units that are required for this test.
  needs: ['store:main', 'model:client', 'model:project', 'model:task']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('it adds log entry', function() {
  var store = this.store(),
    task;
  Ember.run(function(){
    task = store.createRecord('task', {});
    store.createLogEntry(task);
  });
  ok(!!task);
});
