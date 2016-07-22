angular.module('assignmentApp').controller('AssignmentController', function($scope, DataService){
  $scope.getAssignment = DataService.getAssignment;
  $scope.data = DataService.data;

  $scope.getId = function(id){
    DataService.getId(id);
  }

  $scope.postAssignment = function(){
    var sendData = {};

    sendData.assignment_number = $scope.assignment_number;
    sendData.student_name = $scope.student_name;
    sendData.score = $scope.score;
    DataService.postAssignment(sendData);

  }


});
