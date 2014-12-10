import startApp from '../../tests/helpers/start-app';
import Ember from 'ember';
import pageActions from '../../tests/integration/helpers/page-actions';

var App;

module('Integration - Clock', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('The clock should be disabled', function() {
  visit('/')
    .then(function() {
      ok(!!pageActions.findStart().hasClass('disabled'));
    });
});
test('The clock should be enabled after selecting first task', function() {
  pageActions.visitFirstTask();
  andThen(function(){
    ok(!pageActions.findStart().hasClass('disabled'));
  });
});
test('Start should be disabled after it was clicked', function() {
  pageActions.visitFirstTask();
  pageActions.clickStart();
  andThen(function() {
    ok(!!pageActions.findStart().hasClass('disabled'));
  });
});
test('Stop should be enabled after log entry was started', function() {
  pageActions.visitFirstTask();
  pageActions.clickStart();
  andThen(function() {
    ok(!pageActions.findStop().hasClass('disabled'));
  });
});
test('Stop should be disabled after log entry was stopped', function() {
  pageActions.visitFirstTask();
  pageActions.clickStart();
  pageActions.clickStop();
  andThen(function() {
    ok(!!pageActions.findStop().hasClass('disabled'));
  });
});

