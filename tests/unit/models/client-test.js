import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('client', 'Client', {
  // Specify the other units that are required for this test.
  needs: ['model:project', 'model:task', 'model:log-entry']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
