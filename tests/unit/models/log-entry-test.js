import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('log-entry', 'LogEntry', {
  // Specify the other units that are required for this test.
  needs: ['model:client', 'model:project', 'model:task']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
