import DS from 'ember-data';
import Client from "pomotrack/models/client";
import Project from "pomotrack/models/project";
import Task from "pomotrack/models/task";

Client.reopen({
  FIXTURES: [{
    id: 1,
    name: 'Brad Pitt',
    added: new Date(),
    projects: [1, 2, 3]
  }, {
    id: 2,
    name: 'Angelica Jolie',
    added: new Date(),
    projects: [4, 5, 6]
  }]
});

Project.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Website',
    added: new Date(),
    active: true,
    client: 1,
    tasks: [1, 2, 3]
  }, {
    id: 2,
    title: 'iOS Application',
    added: new Date(),
    active: true,
    client: 1,
    tasks: [4, 5]
  }, {
    id: 3,
    title: 'Android Application',
    added: new Date(),
    active: true,
    client: 1,
    tasks: [6]
  }, {
    id: 4,
    title: 'Fix XML',
    added: new Date(),
    active: true,
    client: 2,
    tasks: [7, 8]
  }, {
    id: 5,
    title: 'Job Website',
    added: new Date(),
    active: true,
    client: 2,
    tasks: [9]
  }, {
    id: 6,
    title: 'Winows Application',
    added: new Date(),
    active: true,
    client: 2,
    tasks: [10]
  }]
});

Task.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'The Clock',
    added: new Date(),
    project: 1
  }, {
    id: 2,
    title: 'The Quick',
    added: new Date(),
    project: 1
  }, {
    id: 3,
    title: 'The Brown',
    added: new Date(),
    project: 1
  }, {
    id: 4,
    title: 'Fox without The',
    added: new Date(),
    project: 2
  }, {
    id: 5,
    title: 'I think jumped',
    added: new Date(),
    project: 2
  }, {
    id: 6,
    title: 'Over',
    added: new Date(),
    project: 3
  }, {
    id: 7,
    title: 'The Fence',
    added: new Date(),
    project: 4
  }, {
    id: 8,
    title: 'Gumball',
    added: new Date(),
    projects: 4
  }, {
    id: 9,
    title: 'Must Watch',
    added: new Date(),
    project: 5
  }, {
    id: 10,
    title: 'Soon',
    added: new Date(),
    project: 6
  }]
});

export default DS.FixtureAdapter.extend({
});

