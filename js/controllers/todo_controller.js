Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editToDo: function() {
      this.set('isEditing', false)
    }
  }
  // isCompleted: function(key, value) {
  //   var model = this.get('model');
  //   if (value === undefined) {
  //     return this.get('isCompleted');
  //   } else {
  //     model.set('isCompleted', value);
  //     model.save();
  //     return value;
  //   }
  // }.property('model.isCompleted'),
  isEdting: false
})
