_ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var TodoView = require('./views/layout');
var ToDoModel = require('./models/todo');

var initialData = {
  items: [
    {assignee: 'Scott', text: 'Write a book about Marionette'},
    {assignee: 'Andrew', text: 'Do some coding'}
  ]
};


var App = new Marionette.Application({
  onStart: function(options) {
    console.log(options);
    var todo = new TodoView({
      collection: new Backbone.Collection(options.initialData.items),
      model: new ToDoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }
});

App.start({initialData: initialData});
