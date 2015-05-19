describe('tasks controller', function () {
  var ctrl;
  beforeEach(module('app.controllers.tasks'));
  beforeEach(inject(function($controller){
    var taskList = [{
      owner: 'bob',
      description: 'Mow the lawn'
    }, {
      owner: 'yuri',
      description: 'Save the world'
    }];

    var mockTasks = {
      getTasks: sinon.spy(function() {
        return Q.when(taskList);
      })
    };

    ctrl = $controller('TasksCtrl', {
      tasks: mockTasks
    });
  }));

  it('should get tasks', function() {
    return Q.timeout(function() {}, 0)
      .then(function() {
        expect(ctrl.taskList.length).to.equal(2);
        ctrl.clear();
        expect(ctrl.taskList.length).to.equal(0);
      });
  });
});