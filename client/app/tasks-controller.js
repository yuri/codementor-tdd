angular.module('app.controllers.tasks', [
  'app.tasks'
])

.controller('TasksCtrl', function(tasks, $log) {
  var vm = this;
  vm.taskList = [];

  tasks.getTasks()
    .then(function(taskList) {
      vm.taskList = taskList;
    })
    .then(null, $log.error);

  vm.clear = function() {
    vm.taskList = [];
  };

});